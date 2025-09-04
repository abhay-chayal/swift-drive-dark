import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, MapPin, Clock, User, Phone, Mail, ArrowLeft, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { showPremiumToast } from '@/components/ui/premium-toast';

const BookingForm = () => {
  const navigate = useNavigate();
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    pickupTime: '',
    duration: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const requiredFields = ['name', 'email', 'phone', 'pickupLocation', 'dropoffLocation', 'pickupDate', 'pickupTime', 'duration'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      showPremiumToast('Please fill in all required fields', 'error');
      return;
    }

    setIsLoading(true);
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init('YOUR_PUBLIC_KEY'); // You'll need to replace this
      
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // You'll need to replace this
        'YOUR_TEMPLATE_ID', // You'll need to replace this
        form.current!,
        'YOUR_PUBLIC_KEY' // You'll need to replace this
      );
      
      if (result.status === 200) {
        showPremiumToast('Booking request sent successfully! We will contact you soon.', 'success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          pickupLocation: '',
          dropoffLocation: '',
          pickupDate: '',
          pickupTime: '',
          duration: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      showPremiumToast('Failed to send booking request. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.05)_0%,_transparent_70%)]" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-floating" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-floating" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8 text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="inline-flex items-center glass px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">Book Your Swift</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Complete Your{' '}
            <span className="text-premium">Booking</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fill in your details below and we'll get back to you within 24 hours
          </p>
        </div>

        {/* Booking Form */}
        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 rounded-3xl shadow-elevation">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center text-sm font-medium">
                      <User className="w-4 h-4 mr-2 text-primary" />
                      Full Name *
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="bg-muted/50 border-border/20"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center text-sm font-medium">
                      <Mail className="w-4 h-4 mr-2 text-primary" />
                      Email Address *
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                      className="bg-muted/50 border-border/20"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center text-sm font-medium">
                    <Phone className="w-4 h-4 mr-2 text-primary" />
                    Phone Number *
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+91 98765 43210"
                    className="bg-muted/50 border-border/20"
                    required
                  />
                </div>
              </div>

              {/* Booking Details */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">Booking Details</h3>
                
                {/* Location Selection */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickupLocation" className="flex items-center text-sm font-medium">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      Pickup Location *
                    </Label>
                    <Select 
                      value={formData.pickupLocation} 
                      onValueChange={(value) => handleInputChange('pickupLocation', value)}
                      name="pickupLocation"
                    >
                      <SelectTrigger className="bg-muted/50 border-border/20">
                        <SelectValue placeholder="Select pickup city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="malviya-nagar">Malviya Nagar, Jaipur</SelectItem>
                        <SelectItem value="c-scheme">C-Scheme, Jaipur</SelectItem>
                        <SelectItem value="vaishali-nagar">Vaishali Nagar, Jaipur</SelectItem>
                        <SelectItem value="kukas">Kukas, Jaipur</SelectItem>
                        <SelectItem value="mansarovar">Mansarovar, Jaipur</SelectItem>
                        <SelectItem value="jaipur-airport">Jaipur Airport</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dropoffLocation" className="flex items-center text-sm font-medium">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      Drop-off Location *
                    </Label>
                    <Select 
                      value={formData.dropoffLocation} 
                      onValueChange={(value) => handleInputChange('dropoffLocation', value)}
                      name="dropoffLocation"
                    >
                      <SelectTrigger className="bg-muted/50 border-border/20">
                        <SelectValue placeholder="Select drop-off city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="malviya-nagar">Malviya Nagar, Jaipur</SelectItem>
                        <SelectItem value="c-scheme">C-Scheme, Jaipur</SelectItem>
                        <SelectItem value="vaishali-nagar">Vaishali Nagar, Jaipur</SelectItem>
                        <SelectItem value="kukas">Kukas, Jaipur</SelectItem>
                        <SelectItem value="mansarovar">Mansarovar, Jaipur</SelectItem>
                        <SelectItem value="jaipur-airport">Jaipur Airport</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Date and Time Selection */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickupDate" className="flex items-center text-sm font-medium">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      Pickup Date *
                    </Label>
                    <Input
                      type="date"
                      id="pickupDate"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={(e) => handleInputChange('pickupDate', e.target.value)}
                      className="bg-muted/50 border-border/20"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="pickupTime" className="flex items-center text-sm font-medium">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      Pickup Time *
                    </Label>
                    <Select 
                      value={formData.pickupTime} 
                      onValueChange={(value) => handleInputChange('pickupTime', value)}
                      name="pickupTime"
                    >
                      <SelectTrigger className="bg-muted/50 border-border/20">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">09:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="15:00">03:00 PM</SelectItem>
                        <SelectItem value="18:00">06:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Duration */}
                <div className="space-y-2">
                  <Label htmlFor="duration" className="flex items-center text-sm font-medium">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    Rental Duration *
                  </Label>
                  <Select 
                    value={formData.duration} 
                    onValueChange={(value) => handleInputChange('duration', value)}
                    name="duration"
                  >
                    <SelectTrigger className="bg-muted/50 border-border/20">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4 Hours - ₹480">4 Hours - ₹480</SelectItem>
                      <SelectItem value="8 Hours - ₹960">8 Hours - ₹960</SelectItem>
                      <SelectItem value="1 Day (24 Hours) - ₹2,880">1 Day (24 Hours) - ₹2,880</SelectItem>
                      <SelectItem value="3 Days - ₹8,640">3 Days - ₹8,640</SelectItem>
                      <SelectItem value="1 Week - ₹20,160">1 Week - ₹20,160</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Additional Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Additional Requirements (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Any specific requirements or questions..."
                    className="bg-muted/50 border-border/20 min-h-[100px]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-border/20">
                <Button
                  type="submit"
                  className="btn-premium w-full text-lg py-6 group"
                  disabled={isLoading}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isLoading ? 'Sending Request...' : 'Submit Booking Details'}
                  {!isLoading && (
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  )}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center mt-4">
                  We'll contact you within 24 hours to confirm your booking • No hidden charges
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;