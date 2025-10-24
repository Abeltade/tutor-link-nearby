import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Users, Star, BookOpen, Clock, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Connect • Learn • Grow
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-6xl">
              Find the Perfect Tutor
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Near You</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Connect with qualified tutors in your area. Location-based matching made simple for students and educators.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary shadow-glow transition-all hover:scale-105"
                onClick={() => navigate('/role-select')}
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Why Choose TutorConnect?
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need for successful tutoring connections
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-card border-border/50 p-6 shadow-soft transition-all hover:scale-105 hover:shadow-glow"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Get started in three simple steps
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary text-2xl font-bold text-white shadow-glow">
                  {index + 1}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-0.5 w-full bg-gradient-primary opacity-20 md:block" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary shadow-glow transition-all hover:scale-105"
              onClick={() => navigate('/role-select')}
            >
              Start Connecting Now
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-primary opacity-5" />
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join thousands of students and tutors already connected through our platform
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary shadow-glow transition-all hover:scale-105"
            onClick={() => navigate('/role-select')}
          >
            Join TutorConnect
          </Button>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Location-Based Matching",
    description: "Find tutors nearby with our advanced geo-location technology. Connect with educators in your area effortlessly.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Verified Profiles",
    description: "All tutors are carefully vetted. Browse detailed profiles with qualifications, experience, and reviews.",
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Ratings & Reviews",
    description: "Make informed decisions with our transparent rating system. See what other students say about tutors.",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "All Subjects Covered",
    description: "From math to music, coding to chemistry. Find expert tutors for any subject you need help with.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Flexible Scheduling",
    description: "Book sessions that fit your schedule. Choose from in-person or online tutoring options.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Safe & Secure",
    description: "Your privacy and safety are our priority. All communications are secure and monitored.",
  },
];

const steps = [
  {
    title: "Create Your Profile",
    description: "Sign up as a student or tutor. Share your needs or expertise to get matched perfectly.",
  },
  {
    title: "Find Your Match",
    description: "Browse profiles based on location, subject, and availability. Connect with the perfect fit.",
  },
  {
    title: "Start Learning",
    description: "Book your first session and begin your learning journey. Rate your experience after.",
  },
];

export default Index;
