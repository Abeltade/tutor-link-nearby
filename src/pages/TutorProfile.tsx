import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const subjects = [
  "Mathematics", "Physics", "Chemistry", "Biology", "English", 
  "History", "Geography", "Computer Science", "Music", "Art"
];

const TutorProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subjects: [] as string[],
    education: "",
    experience: "",
    bio: "",
    availability: "",
    hourlyRate: "",
    location: "",
    travelRadius: "",
  });

  const handleSubjectToggle = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || formData.subjects.length === 0 || !formData.hourlyRate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Profile Created!",
      description: "Your tutor profile has been created successfully.",
    });
    
    // Navigate to dashboard (to be created)
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-hero py-12">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/role-select')}
            className="mb-4"
          >
            ← Back
          </Button>
          <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
            Create Your Tutor Profile
          </h1>
          <p className="text-muted-foreground">
            Share your expertise and connect with students
          </p>
        </div>

        <Card className="bg-card/80 backdrop-blur-sm border-border/50 p-8 shadow-soft">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Basic Information</h2>
              
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>
            </div>

            {/* Subjects */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Subjects You Teach *</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {subjects.map((subject) => (
                  <div key={subject} className="flex items-center space-x-2">
                    <Checkbox
                      id={`tutor-${subject}`}
                      checked={formData.subjects.includes(subject)}
                      onCheckedChange={() => handleSubjectToggle(subject)}
                    />
                    <Label
                      htmlFor={`tutor-${subject}`}
                      className="cursor-pointer text-sm font-normal"
                    >
                      {subject}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Qualifications */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Qualifications & Experience</h2>
              
              <div className="space-y-2">
                <Label htmlFor="education">Education</Label>
                <Input
                  id="education"
                  value={formData.education}
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                  placeholder="e.g., Bachelor's in Mathematics, University of..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Teaching Experience</Label>
                <Input
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  placeholder="e.g., 5 years of tutoring high school students"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">About You</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  placeholder="Tell students about your teaching style and approach..."
                  rows={4}
                />
              </div>
            </div>

            {/* Availability & Rates */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Availability & Rates</h2>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="availability">Availability</Label>
                  <Input
                    id="availability"
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    placeholder="e.g., Weekday evenings"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hourlyRate">Hourly Rate *</Label>
                  <Input
                    id="hourlyRate"
                    value={formData.hourlyRate}
                    onChange={(e) => setFormData({ ...formData, hourlyRate: e.target.value })}
                    placeholder="$40/hour"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Location Preferences</h2>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="location">Your Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="City or area"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="travelRadius">Willing to Travel</Label>
                  <Input
                    id="travelRadius"
                    value={formData.travelRadius}
                    onChange={(e) => setFormData({ ...formData, travelRadius: e.target.value })}
                    placeholder="e.g., 10 km / Online only"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button 
                type="submit"
                className="flex-1 bg-gradient-primary shadow-glow transition-all hover:scale-105"
              >
                Create Profile
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default TutorProfile;
