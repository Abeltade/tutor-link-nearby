import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RoleSelect = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Welcome to <span className="bg-gradient-primary bg-clip-text text-transparent">TutorConnect</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Choose your role to get started
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Student Role */}
          <Card 
            className="group cursor-pointer bg-gradient-card border-border/50 p-8 shadow-soft transition-all hover:scale-105 hover:shadow-glow"
            onClick={() => navigate('/profile/student')}
          >
            <div className="mb-6 inline-flex rounded-full bg-primary/10 p-6 text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-white">
              <Users className="h-12 w-12" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-foreground">
              I'm a Student
            </h2>
            <p className="mb-6 text-muted-foreground">
              Looking for a tutor to help with my studies. I want to find qualified educators near me.
            </p>
            <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Search for tutors by subject and location
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                View tutor profiles and ratings
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Book sessions that fit your schedule
              </li>
            </ul>
            <Button 
              className="w-full bg-gradient-primary shadow-glow transition-all group-hover:scale-105"
            >
              Continue as Student
            </Button>
          </Card>

          {/* Tutor Role */}
          <Card 
            className="group cursor-pointer bg-gradient-card border-border/50 p-8 shadow-soft transition-all hover:scale-105 hover:shadow-glow"
            onClick={() => navigate('/profile/tutor')}
          >
            <div className="mb-6 inline-flex rounded-full bg-accent/10 p-6 text-accent transition-colors group-hover:bg-gradient-primary group-hover:text-white">
              <GraduationCap className="h-12 w-12" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-foreground">
              I'm a Tutor
            </h2>
            <p className="mb-6 text-muted-foreground">
              I want to share my knowledge and help students succeed. Connect me with learners in my area.
            </p>
            <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                Create your professional tutor profile
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                Set your subjects, rates, and availability
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                Connect with students near you
              </li>
            </ul>
            <Button 
              className="w-full bg-gradient-primary shadow-glow transition-all group-hover:scale-105"
            >
              Continue as Tutor
            </Button>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-muted-foreground hover:text-foreground"
          >
            ← Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelect;
