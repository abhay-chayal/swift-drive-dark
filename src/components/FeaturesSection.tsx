import { Car, Shield, Smartphone, CreditCard, MapPin, Clock, Users, Wrench } from 'lucide-react';

const features = [
  {
    icon: Car,
    title: "Premium Fleet",
    description: "Latest 2025 models with advanced features and pristine maintenance"
  },
  {
    icon: Smartphone,
    title: "Smart Booking",
    description: "Book instantly through our AI-powered platform with real-time availability"
  },
  {
    icon: Shield,
    title: "Full Insurance",
    description: "Comprehensive coverage including accidents, theft, and third-party damages"
  },
  {
    icon: CreditCard,
    title: "UPI Integration",
    description: "Seamless payments with all major UPI apps and digital wallets"
  },
  {
    icon: MapPin,
    title: "Flexible Pickup",
    description: "Doorstep delivery and pickup service across 50+ cities"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer service and emergency roadside assistance"
  },
  {
    icon: Users,
    title: "Corporate Plans",
    description: "Special packages for businesses and frequent travelers"
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Regular servicing and quality checks for optimal performance"
  }
];

const FeaturesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-floating" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-floating" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center glass px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">Why Choose SwiftRent</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Premium Features for{' '}
            <span className="text-premium">Modern Travel</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of car rental with our cutting-edge platform 
            and unmatched service quality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass p-6 rounded-3xl hover-lift group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-premium rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          {[
            { number: "1000+", label: "Happy Customers", suffix: "" },
            { number: "50", label: "Cities Covered", suffix: "+" },
            { number: "99.5", label: "Customer Satisfaction", suffix: "%" },
            { number: "24", label: "Hours Support", suffix: "/7" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-premium mb-2 group-hover:scale-110 transition-transform">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;