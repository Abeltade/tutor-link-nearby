import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const subjects = [
  "Mathematics", "Physics", "Chemistry", "Biology", "English", 
  "History", "Geography", "Computer Science", "Music", "Art"
];

const StudentProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    grade: "",
    subjects: [] as string[],
    availability: "",
    budget: "",
    location: "",
    specialRequirements: "",
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
    
    if (!formData.name || !formData.age || !formData.grade || formData.subjects.length === 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Profile Created!",
      description: "Your student profile has been created successfully.",
    });
    
    // Navigate to search page (to be created)
    navigate('/search');
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
            Create Your Student Profile
          </h1>
          <p className="text-muted-foreground">
            Tell us about yourself to find the perfect tutor
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
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="age">Age *</Label>
                  <Input
                    id="age"
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="Enter your age"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="grade">Grade/Level *</Label>
                  <Select 
                    value={formData.grade}
                    onValueChange={(value) => setFormData({ ...formData, grade: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => (
                        <SelectItem key={i + 1} value={`Grade ${i + 1}`}>
                          Grade {i + 1}
                        </SelectItem>
                      ))}
                      <SelectItem value="University">University</SelectItem>
                      <SelectItem value="Adult Learner">Adult Learner</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Subjects */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Subjects Needed *</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {subjects.map((subject) => (
                  <div key={subject} className="flex items-center space-x-2">
                    <Checkbox
                      id={subject}
                      checked={formData.subjects.includes(subject)}
                      onCheckedChange={() => handleSubjectToggle(subject)}
                    />
                    <Label
                      htmlFor={subject}
                      className="cursor-pointer text-sm font-normal"
                    >
                      {subject}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Preferences */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Preferences</h2>
              
              <div className="space-y-2">
                <Label htmlFor="availability">Preferred Availability</Label>
                <Input
                  id="availability"
                  value={formData.availability}
                  onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                  placeholder="e.g., Weekday evenings, Saturday mornings"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range (per hour)</Label>
                <Input
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  placeholder="e.g., $30-50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Enter your city or area"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialRequirements">Special Requirements</Label>
                <Textarea
                  id="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                  placeholder="Any specific learning needs or preferences..."
                  rows={4}
                />
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

export default StudentProfile;
