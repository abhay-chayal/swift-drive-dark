import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BookingEmailRequest {
  userEmail: string;
  userName: string;
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  pickupTime: string;
  duration: string;
  phone: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const bookingData: BookingEmailRequest = await req.json();

    console.log("Received booking data:", bookingData);

    const emailResponse = await resend.emails.send({
      from: "GlydeOn Booking <onboarding@resend.dev>",
      to: ["chayalabhay123@gmail.com"],
      subject: "New Swift Booking Enquiry",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #00d4ff; text-align: center;">New Swift Booking Enquiry</h1>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #333; margin-bottom: 15px;">Customer Details</h2>
            <p><strong>Name:</strong> ${bookingData.userName}</p>
            <p><strong>Email:</strong> ${bookingData.userEmail}</p>
            <p><strong>Phone:</strong> ${bookingData.phone}</p>
          </div>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #333; margin-bottom: 15px;">Booking Details</h2>
            <p><strong>Pickup Location:</strong> ${bookingData.pickupLocation}</p>
            <p><strong>Drop-off Location:</strong> ${bookingData.dropoffLocation}</p>
            <p><strong>Pickup Date:</strong> ${bookingData.pickupDate}</p>
            <p><strong>Pickup Time:</strong> ${bookingData.pickupTime}</p>
            <p><strong>Rental Duration:</strong> ${bookingData.duration}</p>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #666;">This booking enquiry was submitted through the GlydeOn website.</p>
            <p style="color: #666;">Please contact the customer to confirm the booking details.</p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-booking-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);