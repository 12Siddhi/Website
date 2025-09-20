"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function PhotoReporting() {
  const recentReports = [
    {
      id: "WR001",
      type: "Illegal Dumping",
      location: "MG Road, Bangalore",
      reporter: "Citizen",
      status: "Under Investigation",
      time: "2 hours ago",
      severity: "high",
    },
    {
      id: "WR002",
      type: "Overflowing Bin",
      location: "Connaught Place, Delhi",
      reporter: "Green Champion",
      status: "Resolved",
      time: "5 hours ago",
      severity: "medium",
    },
    {
      id: "WR003",
      type: "Missed Collection",
      location: "Bandra West, Mumbai",
      reporter: "Citizen",
      status: "Assigned",
      time: "1 day ago",
      severity: "low",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Resolved":
        return "default"
      case "Under Investigation":
        return "destructive"
      case "Assigned":
        return "secondary"
      default:
        return "outline"
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-500"
      case "medium":
        return "bg-yellow-500"
      default:
        return "bg-blue-500"
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">"If You See Waste, Send Photo"</h2>
        <p className="text-muted-foreground">Community-driven waste monitoring inspired by Karnataka's Yadgir city</p>
      </div>

      {/* Quick Report */}
      <Card className="border-0 bg-gradient-to-r from-primary/10 to-accent/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
              <circle cx="12" cy="13" r="3" />
            </svg>
            Report Waste Issue
          </CardTitle>
          <CardDescription>Take a photo and help keep your community clean</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button variant="outline" className="h-auto p-3 flex-col gap-2 bg-transparent">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18l-2 13H5L3 6Z" />
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
              <span className="text-xs">Illegal Dumping</span>
            </Button>
            <Button variant="outline" className="h-auto p-3 flex-col gap-2 bg-transparent">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c0-1 1-2 2-2v2" />
              </svg>
              <span className="text-xs">Overflowing Bin</span>
            </Button>
            <Button variant="outline" className="h-auto p-3 flex-col gap-2 bg-transparent">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                <path d="M15 18H9" />
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                <circle cx="17" cy="18" r="2" />
                <circle cx="7" cy="18" r="2" />
              </svg>
              <span className="text-xs">Missed Collection</span>
            </Button>
            <Button variant="outline" className="h-auto p-3 flex-col gap-2 bg-transparent">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <span className="text-xs">Other Issue</span>
            </Button>
          </div>

          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center space-y-2">
            <svg
              className="h-12 w-12 mx-auto text-muted-foreground/50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
              <circle cx="12" cy="13" r="3" />
            </svg>
            <p className="text-sm text-muted-foreground">Tap to take photo or upload image</p>
            <p className="text-xs text-muted-foreground">Location will be automatically tagged</p>
          </div>

          <Button className="w-full" size="lg">
            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7,10 12,15 17,10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            Submit Report
          </Button>
        </CardContent>
      </Card>

      {/* Recent Reports */}
      <Card className="border-0 bg-card/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
              <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
              <path d="M15 2v5h5" />
            </svg>
            Recent Community Reports
          </CardTitle>
          <CardDescription>Latest waste issues reported by citizens and Green Champions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentReports.map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${getSeverityColor(report.severity)}`} />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{report.type}</p>
                      <Badge variant="outline" className="text-xs">
                        {report.id}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{report.location}</p>
                    <p className="text-xs text-muted-foreground">
                      Reported by {report.reporter} • {report.time}
                    </p>
                  </div>
                </div>
                <Badge variant={getStatusColor(report.status)}>{report.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Impact Statistics */}
      <Card className="border-0 bg-card/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" x2="12" y1="20" y2="10" />
              <line x1="18" x2="18" y1="20" y2="4" />
              <line x1="6" x2="6" y1="20" y2="16" />
            </svg>
            Community Impact
          </CardTitle>
          <CardDescription>How photo reporting is making a difference</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 rounded-lg bg-primary/10">
              <p className="text-2xl font-bold text-primary">1,247</p>
              <p className="text-xs text-muted-foreground">Reports Submitted</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-green-100">
              <p className="text-2xl font-bold text-green-600">892</p>
              <p className="text-xs text-muted-foreground">Issues Resolved</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-blue-100">
              <p className="text-2xl font-bold text-blue-600">156</p>
              <p className="text-xs text-muted-foreground">Active Reporters</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-accent/10">
              <p className="text-2xl font-bold text-accent">72%</p>
              <p className="text-xs text-muted-foreground">Resolution Rate</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
