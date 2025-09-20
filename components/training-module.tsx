"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function TrainingModule() {
  const trainingModules = [
    {
      title: "Waste Segregation Basics",
      description: "Learn to separate dry, wet, and hazardous waste",
      progress: 100,
      status: "completed",
      duration: "15 min",
    },
    {
      title: "Home Composting",
      description: "Make organic compost from kitchen waste",
      progress: 60,
      status: "in-progress",
      duration: "20 min",
    },
    {
      title: "Plastic Reuse Techniques",
      description: "Creative ways to reuse plastic containers",
      progress: 0,
      status: "not-started",
      duration: "12 min",
    },
    {
      title: "Hazardous Waste Handling",
      description: "Safe disposal of batteries, electronics, chemicals",
      progress: 0,
      status: "not-started",
      duration: "18 min",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "in-progress":
        return "bg-blue-500"
      default:
        return "bg-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Mandatory Citizen Training</h2>
        <p className="text-muted-foreground">Complete all modules to become a certified waste management citizen</p>
      </div>

      {/* Overall Progress */}
      <Card className="border-0 bg-card/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22,4 12,14.01 9,11.01" />
            </svg>
            Training Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Overall Completion</span>
              <span className="font-medium">40%</span>
            </div>
            <Progress value={40} className="h-2" />
            <p className="text-xs text-muted-foreground">1 of 4 modules completed</p>
          </div>
        </CardContent>
      </Card>

      {/* Training Modules */}
      <div className="grid gap-4">
        {trainingModules.map((module, index) => (
          <Card key={index} className="border-0 bg-card/60 backdrop-blur-sm hover:bg-card/80 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{module.title}</h3>
                    <Badge
                      variant={
                        module.status === "completed"
                          ? "default"
                          : module.status === "in-progress"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {module.status === "completed"
                        ? "Completed"
                        : module.status === "in-progress"
                          ? "In Progress"
                          : "Not Started"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{module.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>Duration: {module.duration}</span>
                    {module.progress > 0 && (
                      <div className="flex items-center gap-1">
                        <Progress value={module.progress} className="h-1 w-16" />
                        <span>{module.progress}%</span>
                      </div>
                    )}
                  </div>
                </div>
                <Button size="sm" variant={module.status === "completed" ? "outline" : "default"} className="ml-4">
                  {module.status === "completed" ? "Review" : module.status === "in-progress" ? "Continue" : "Start"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Certification */}
      <Card className="border-0 bg-gradient-to-r from-primary/10 to-accent/10">
        <CardContent className="p-6 text-center space-y-4">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <svg
                className="h-8 w-8 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Waste Management Certification</h3>
            <p className="text-sm text-muted-foreground">
              Complete all training modules to receive your digital certificate
            </p>
          </div>
          <Button disabled className="bg-muted text-muted-foreground">
            Complete Training to Unlock
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
