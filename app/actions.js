'use server';

import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

/*
  Required environment variables in .env.local:
    SUPABASE_URL=your_supabase_project_url
    SUPABASE_ANON_KEY=your_supabase_anon_key
    RESEND_API_KEY=your_resend_api_key
    CONTACT_EMAIL=your_notification_email

  Supabase "bookings" table schema:
    id             uuid         primary key default gen_random_uuid()
    full_name      text         not null
    email          text         not null
    phone          text         not null
    service_type   text         not null
    property_address text
    preferred_date date
    message        text
    created_at     timestamptz  default now()
*/

export async function submitBooking(prevState, formData) {
  const fullName = formData.get('full_name')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const phone = formData.get('phone')?.toString().trim();
  const serviceType = formData.get('service_type')?.toString().trim();
  const propertyAddress = formData.get('property_address')?.toString().trim() || '';
  const preferredDate = formData.get('preferred_date')?.toString() || null;
  const message = formData.get('message')?.toString().trim() || '';

  if (!fullName || !email || !phone || !serviceType) {
    return { error: true };
  }

  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY
    );

    const { error: dbError } = await supabase.from('bookings').insert([
      {
        full_name: fullName,
        email,
        phone,
        service_type: serviceType,
        property_address: propertyAddress,
        preferred_date: preferredDate || null,
        message,
      },
    ]);

    if (dbError) throw dbError;

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Altura Visuals PR <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'alturavisualspr@gmail.com'],
      subject: `New Booking Request — ${fullName}`,
      html: `
        <h2 style="color:#0A1628">New Booking Request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px">
          <tr><td style="padding:8px 0;color:#666;width:140px">Name</td><td style="padding:8px 0;font-weight:600">${fullName}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0">${email}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Phone</td><td style="padding:8px 0">${phone}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Service</td><td style="padding:8px 0;font-weight:600">${serviceType}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Address</td><td style="padding:8px 0">${propertyAddress || '—'}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Date</td><td style="padding:8px 0">${preferredDate || '—'}</td></tr>
          <tr><td style="padding:8px 0;color:#666;vertical-align:top">Message</td><td style="padding:8px 0">${message || '—'}</td></tr>
        </table>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error('Booking submission error:', err);
    return { error: true };
  }
}
