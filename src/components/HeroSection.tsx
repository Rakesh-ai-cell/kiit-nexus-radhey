import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, BookOpen, TrendingUp } from "lucide-react";
import heroImage from "@/assets/kiit-hero-image.jpg";

const HeroSection = () => {
  const achievements = [
    { icon: Award, label: "Top 30 University", value: "NIRF 2024" },
    { icon: Users, label: "Students", value: "30,000+" },
    { icon: BookOpen, label: "Programs", value: "100+" },
    { icon: TrendingUp, label: "Placement Rate", value: "95%" }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="KIIT University Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-secondary/20 text-secondary rounded-full px-4 py-2 backdrop-blur-sm">
                <Award className="w-4 h-4" />
                <span className="text-sm font-medium">Deemed to be University</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Shape Your
                <span className="block bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
                  Future at KIIT
                </span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Where innovation meets excellence. Join 30,000+ students in a journey of 
                academic brilliance, cutting-edge research, and holistic development at 
                one of India's premier universities.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="group">
                Apply for KIITEE 2026
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button variant="hero" size="lg">
                Explore Programs
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary/30 transition-colors duration-300">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{achievement.value}</div>
                  <div className="text-sm text-white/80">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="hidden lg:block relative">
            <div className="space-y-6">
              {/* Quick Access Cards */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-white font-semibold mb-2">Virtual Campus Tour</h3>
                <p className="text-white/80 text-sm mb-4">Explore our 25+ acre campus with state-of-the-art facilities</p>
                <Button variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary">
                  Take Tour
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-white font-semibold mb-2">Program Finder</h3>
                <p className="text-white/80 text-sm mb-4">Find the perfect program from our 100+ offerings</p>
                <Button variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary">
                  Explore
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-white font-semibold mb-2">Student Portal</h3>
                <p className="text-white/80 text-sm mb-4">Access your academic resources and information</p>
                <Button variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-primary">
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;