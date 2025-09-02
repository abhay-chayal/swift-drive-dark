import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

console.log("Edge function loaded - v2");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
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
  try {
    console.log("=== Edge function called ===");
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    
    // Handle CORS preflight requests
    if (req.method === "OPTIONS") {
      console.log("Handling CORS preflight");
      return new Response(null, { 
        status: 200,
        headers: corsHeaders 
      });
    }

    if (req.method !== "POST") {
      console.log("Method not allowed:", req.method);
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    console.log("Processing booking request...");
    
    const body = await req.text();
    console.log("Raw body:", body);
    
    const bookingData: BookingEmailRequest = JSON.parse(body);
    console.log("Parsed booking data:", bookingData);

    // Get the API key inside the handler to ensure it's available
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    console.log("Resend API key available:", !!resendApiKey);
    console.log("Available env vars:", Object.keys(Deno.env.toObject()));

    if (!resendApiKey) {
      console.error("RESEND_API_KEY environment variable is not set");
      return new Response(
        JSON.stringify({ 
          error: "Resend API key not configured",
          details: "Please configure RESEND_API_KEY in Supabase secrets"
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const resend = new Resend(resendApiKey);
    console.log("Resend client initialized");

    console.log("Sending email via Resend...");
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

    return new Response(JSON.stringify({ 
      success: true, 
      data: emailResponse,
      message: "Booking email sent successfully"
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("=== Error in send-booking-email function ===");
    console.error("Error:", error);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: "Check edge function logs for more information"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

console.log("Starting server...");
serve(handler);