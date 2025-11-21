import galaImage from "@/assets/event-gala.jpg";
import networkingImage from "@/assets/event-networking.jpg";
import communityImage from "@/assets/event-community.jpg";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Events = () => {
  const events = [
    {
      title: "The Royal Charity Gala",
      description: "An unforgettable evening of elegance and philanthropy to support local community initiatives.",
      image: galaImage,
      date: "Nov 15, 2024",
      cta: "Learn More"
    },
    {
      title: "Innovatory Networking Night",
      description: "Connecting the brightest minds in tech, art, and business over cocktails and conversation.",
      image: networkingImage,
      date: "Dec 8, 2024",
      cta: "View Gallery"
    },
    {
      title: "Annual Community Day",
      description: "Our members come together to volunteer their time and talents on local service projects.",
      image: communityImage,
      date: "Jan 20, 2025",
      cta: "See Impact"
    }
  ];

  return (
    <section id="events" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Royal <span className="text-primary">Gatherings</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A glimpse into our event calendar, from elegant soirées to impactful charity drives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary px-3 py-1 rounded-full">
                  <span className="text-primary-foreground text-sm font-semibold">{event.date}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {event.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {event.description}
                </p>
                <button className="flex items-center text-primary hover:text-primary/80 transition-colors font-semibold group/btn">
                  {event.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
