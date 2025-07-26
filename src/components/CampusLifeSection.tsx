import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, MapPin, Calendar, Users } from "lucide-react";

const CampusLifeSection = () => {
  const features = [
    {
      title: "25+ Acre Green Campus",
      description: "Modern infrastructure with sustainable design and eco-friendly initiatives",
      icon: MapPin,
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop"
    },
    {
      title: "100+ Student Clubs",
      description: "Technical societies, cultural groups, sports teams, and special interest clubs",
      icon: Users,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop"
    },
    {
      title: "Year-round Events",
      description: "Cultural festivals, tech competitions, sports tournaments, and guest lectures",
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop"
    }
  ];

  const facilities = [
    "Modern Hostels with 24/7 Security",
    "Multi-cuisine Food Courts", 
    "State-of-the-art Gymnasium",
    "Olympic-size Swimming Pool",
    "Central Library with 500K+ Books",
    "Wi-Fi Enabled Campus",
    "Medical Center with Emergency Care",
    "Transportation Services"
  ];

  return (
    <section id="campus-life" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
            Life at KIIT University
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience a vibrant campus life that nurtures both academic excellence and personal growth. 
            From world-class facilities to diverse cultural experiences, KIIT offers everything you need for holistic development.
          </p>
        </div>

        {/* Hero Video Section */}
        <div className="relative mb-16 rounded-2xl overflow-hidden shadow-strong group">
          <div className="relative h-64 lg:h-96 bg-gradient-to-r from-primary to-primary-light">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=600&fit=crop"
              alt="KIIT Campus Life"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="group-hover:scale-110 transition-transform duration-300"
              >
                <Play className="w-6 h-6 mr-2" />
                Watch Campus Tour
              </Button>
            </div>
            
            {/* Overlay Text */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Virtual Campus Experience</h3>
              <p className="text-white/90">Take a 360° tour of our beautiful campus</p>
            </div>
          </div>
        </div>

        {/* Campus Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <div className="relative h-48">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mb-2">
                    <feature.icon className="w-5 h-5 text-secondary-foreground" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Campus Facilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-6">
              World-Class Campus Facilities
            </h3>
            <p className="text-muted-foreground mb-8">
              Our campus is designed to provide students with everything they need for a comfortable, 
              productive, and enriching university experience.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                  <span className="text-foreground">{facility}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg">
                Schedule Campus Visit
              </Button>
              <Button variant="outline" size="lg">
                Virtual Tour
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
                alt="Campus Facility 1"
                className="rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=300&h=200&fit=crop"
                alt="Campus Facility 2"
                className="rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300 mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
                alt="Campus Facility 3"
                className="rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300 -mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop"
                alt="Campus Facility 4"
                className="rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLifeSection;