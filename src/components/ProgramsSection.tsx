import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Stethoscope, Calculator, Briefcase, Palette, Wrench } from "lucide-react";

const ProgramsSection = () => {
  const schools = [
    {
      icon: Code,
      name: "Computer Science & Engineering",
      description: "AI/ML, Cyber Security, Data Science, Software Engineering",
      programs: "8 Programs",
      highlights: ["IIT-level curriculum", "Industry partnerships", "Research opportunities"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Stethoscope,
      name: "Medical Sciences",
      description: "MBBS, Nursing, Pharmacy, Allied Health Sciences",
      programs: "12 Programs",
      highlights: ["State-of-the-art hospital", "Clinical excellence", "Research facilities"],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Calculator,
      name: "Mathematics & Sciences",
      description: "Physics, Chemistry, Mathematics, Biotechnology",
      programs: "10 Programs",
      highlights: ["Advanced laboratories", "Research projects", "Industry exposure"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Briefcase,
      name: "Management",
      description: "MBA, BBA, Hotel Management, Event Management",
      programs: "6 Programs",
      highlights: ["Industry mentorship", "Global exposure", "Placement support"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Palette,
      name: "Arts & Design",
      description: "Fine Arts, Fashion Design, Interior Design, Animation",
      programs: "8 Programs",
      highlights: ["Creative studios", "Industry projects", "Exhibition opportunities"],
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Wrench,
      name: "Engineering",
      description: "Mechanical, Civil, Electrical, Electronics & Communication",
      programs: "15 Programs",
      highlights: ["Modern workshops", "Industry tie-ups", "Innovation labs"],
      color: "from-gray-500 to-slate-600"
    }
  ];

  return (
    <section id="academics" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
            Explore Our Schools & Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose from 100+ programs across 12 schools, designed to prepare you for tomorrow's challenges 
            with cutting-edge curriculum and world-class faculty.
          </p>
          <Button variant="cta" size="lg" className="group">
            Program Finder Tool
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schools.map((school, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-all duration-300 transform hover:scale-105 border-border bg-background overflow-hidden"
            >
              <CardHeader className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${school.color} rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300`}>
                  <school.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-primary group-hover:text-primary-light transition-colors duration-300">
                  {school.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {school.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    {school.programs}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {school.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Explore Programs
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Schools & Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;