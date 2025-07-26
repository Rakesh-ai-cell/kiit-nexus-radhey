import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight, Clock, Tag } from "lucide-react";

const NewsEventsSection = () => {
  const news = [
    {
      title: "KIIT Students Win National Hackathon 2024",
      excerpt: "Team from School of Computer Engineering bags first prize in prestigious coding competition with innovative AI solution.",
      date: "2024-07-20",
      category: "Achievement",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop"
    },
    {
      title: "New Research Center for Sustainable Technology",
      excerpt: "KIIT inaugurates state-of-the-art research facility focusing on green technology and environmental sustainability.",
      date: "2024-07-18", 
      category: "Research",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    },
    {
      title: "International Partnership with MIT",
      excerpt: "KIIT signs MOU with Massachusetts Institute of Technology for student exchange and joint research programs.",
      date: "2024-07-15",
      category: "Partnership",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop"
    }
  ];

  const events = [
    {
      title: "KIIT Tech Fest 2024",
      date: "2024-08-15",
      time: "9:00 AM",
      location: "Main Campus",
      description: "Annual technical festival featuring competitions, workshops, and industry talks.",
      type: "Festival"
    },
    {
      title: "Guest Lecture: Future of AI",
      date: "2024-08-10",
      time: "2:00 PM",
      location: "Auditorium A",
      description: "Expert insights on artificial intelligence trends and career opportunities.",
      type: "Lecture"
    },
    {
      title: "Sports Week Opening Ceremony",
      date: "2024-08-05",
      time: "6:00 PM",
      location: "Sports Complex",
      description: "Annual inter-school sports competition featuring various indoor and outdoor games.",
      type: "Sports"
    },
    {
      title: "Career Fair 2024",
      date: "2024-08-20",
      time: "10:00 AM",
      location: "Convention Center",
      description: "Meet top recruiters and explore internship and placement opportunities.",
      type: "Career"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
            News & Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and upcoming events at KIIT University.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Latest News */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-primary">Latest News</h3>
              <Button variant="outline">View All News</Button>
            </div>
            
            <div className="space-y-6">
              {news.map((item, index) => (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2 p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(item.date)}
                      </div>
                      
                      <CardTitle className="text-xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors duration-300">
                        {item.title}
                      </CardTitle>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {item.excerpt}
                      </p>
                      
                      <Button variant="ghost" size="sm" className="group-hover:text-primary p-0">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-primary">Upcoming Events</h3>
              <Button variant="outline" size="sm">View Calendar</Button>
            </div>
            
            <div className="space-y-4">
              {events.map((event, index) => (
                <Card key={index} className="group hover:shadow-soft transition-all duration-300 border-l-4 border-l-secondary">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded">
                        {event.type}
                      </span>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {event.time}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-semibold text-primary group-hover:text-primary-light transition-colors duration-300">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="text-sm text-muted-foreground mb-2 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(event.date)} • {event.location}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button variant="cta" className="w-full mt-6">
              View All Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;