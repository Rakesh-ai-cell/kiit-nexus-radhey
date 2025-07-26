import { TrendingUp, Award, Users, Building, Globe, BookOpen } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Award,
      number: "30",
      suffix: "th",
      label: "NIRF Ranking 2024",
      description: "Among top universities in India"
    },
    {
      icon: Users,
      number: "30,000",
      suffix: "+",
      label: "Students",
      description: "From 50+ countries worldwide"
    },
    {
      icon: Building,
      number: "12",
      suffix: "",
      label: "Schools",
      description: "Diverse academic disciplines"
    },
    {
      icon: BookOpen,
      number: "100",
      suffix: "+",
      label: "Programs",
      description: "Undergraduate & Postgraduate"
    },
    {
      icon: TrendingUp,
      number: "95",
      suffix: "%",
      label: "Placement Rate",
      description: "Industry-leading outcomes"
    },
    {
      icon: Globe,
      number: "500",
      suffix: "+",
      label: "Industry Partners",
      description: "Global collaborations"
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Excellence in Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why KIIT University stands among India's top institutions for academic excellence and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-8 text-center shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-105 border border-border group"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <div className="mb-4">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                  <span className="text-secondary">{stat.suffix}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;