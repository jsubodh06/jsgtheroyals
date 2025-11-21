import aboutImage from "@/assets/about-gathering.jpg";
import { Star, Users, TrendingUp } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Star,
      text: "Exclusive social & networking events."
    },
    {
      icon: Users,
      text: "Meaningful philanthropic initiatives."
    },
    {
      icon: TrendingUp,
      text: "Opportunities for personal & professional growth."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">The Royals</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Forging lifelong friendships through exclusive events and shared passions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img 
              src={aboutImage} 
              alt="JSG The Royals Members" 
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <p className="text-foreground leading-relaxed">
              JSG The Royals is more than just a social group. It's a curated community of 
              dynamic individuals dedicated to personal growth, professional networking, and 
              making a positive impact. We believe in the power of connection to create 
              unforgettable experiences that enrich lives.
            </p>
            
            <p className="text-foreground leading-relaxed">
              From exclusive galas and charity fundraisers to adventurous outings and workshops, 
              our calendar is designed to inspire and entertain. Our members are leaders, 
              innovators, and philanthropists who share a common vision for a vibrant and 
              supportive community.
            </p>

            <div className="space-y-4 pt-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
