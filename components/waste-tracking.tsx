"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function WasteTracking() {
  const indiaStats = {
    dailyGeneration: "1,70,339",
    dailyCollection: "1,56,449",
    dailyTreatment: "91,511",
    treatmentRate: "54%",
    landfillDisposal: "41,455",
    unaccounted: "37,373",
  }

  const facilities = [
    { type: "Waste-to-Energy Plants", count: 249, status: "operational" },
    { type: "Biomass Power Plants", count: 819, status: "operational" },
    { type: "Small Biogas Plants", count: "50.8 lakhs", status: "operational" },
    { type: "Recycling Centers", count: 156, status: "expanding" },
  ]

  const recentAlerts = [
    {
      type: "Collection Delay",
      location: "Sector 12, Gurgaon",
      severity: "medium",
      time: "2 hours ago",
    },
    {
      type: "Illegal Dumping",
      location: "Ring Road, Delhi",
      severity: "high",
      time: "4 hours ago",
    },
    {
      type: "Facility Maintenance",
      location: "WTE Plant, Pune",
      severity: "low",
      time: "1 day ago",
    },
  ]

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
        <h2 className="text-2xl font-bold">National Waste Tracking Dashboard</h2>
        <p className="text-muted-foreground">Real-time monitoring of India's waste management system</p>
      </div>

      {/* India Statistics */}
      <Card className="border-0 bg-gradient-to-r from-primary/10 to-accent/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3v18h18" />
              <path d="m19 9-5 5-4-4-3 3" />
            </svg>
            National Waste Statistics (Daily)
          </CardTitle>
          <CardDescription>Based on CPCB Municipal Solid Waste Annual Report 2021-22</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-center p-3 rounded-lg bg-card/60">
              <p className="text-2xl font-bold text-primary">{indiaStats.dailyGeneration}</p>
              <p className="text-xs text-muted-foreground">Tonnes Generated Daily</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-card/60">
              <p className="text-2xl font-bold text-blue-600">{indiaStats.dailyCollection}</p>
              <p className="text-xs text-muted-foreground">Tonnes Collected Daily</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-card/60">
              <p className="text-2xl font-bold text-green-600">{indiaStats.dailyTreatment}</p>
              <p className="text-xs text-muted-foreground">Tonnes Treated Daily</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-card/60">
              <p className="text-2xl font-bold text-accent">{indiaStats.treatmentRate}</p>
              <p className="text-xs text-muted-foreground">Treatment Rate</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-card/60">
              <p className="text-2xl font-bold text-orange-600">{indiaStats.landfillDisposal}</p>
              <p className="text-xs text-muted-foreground">Tonnes to Landfills</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-card/60">
              <p className="text-2xl font-bold text-red-600">{indiaStats.unaccounted}</p>
              <p className="text-xs text-muted-foreground">Tonnes Unaccounted</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Processing Facilities */}
      <Card className="border-0 bg-card/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 20h20" />
              <path d="M4 20V10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10" />
              <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
            </svg>
            Waste Processing Facilities
          </CardTitle>
          <CardDescription>Infrastructure for waste treatment across India</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium">{facility.type}</p>
                  <p className="text-sm text-muted-foreground">{facility.count} facilities nationwide</p>
                </div>
                <Badge variant={facility.status === "operational" ? "default" : "secondary"}>{facility.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Alerts */}
      <Card className="border-0 bg-card/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <path d="M12 9v4" />
              <path d="m12 17.02.01 0" />
            </svg>
            Recent Alerts
          </CardTitle>
          <CardDescription>Live monitoring alerts from across the network</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentAlerts.map((alert, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <div className={`h-3 w-3 rounded-full ${getSeverityColor(alert.severity)}`} />
                <div className="flex-1">
                  <p className="font-medium">{alert.type}</p>
                  <p className="text-sm text-muted-foreground">{alert.location}</p>
                </div>
                <p className="text-xs text-muted-foreground">{alert.time}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Center */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button className="h-auto p-4 flex-col gap-2">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="m7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span>Report Issue</span>
        </Button>
        <Button variant="outline" className="h-auto p-4 flex-col gap-2 bg-transparent">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>Find Facilities</span>
        </Button>
        <Button variant="outline" className="h-auto p-4 flex-col gap-2 bg-transparent">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" x2="12" y1="20" y2="10" />
            <line x1="18" x2="18" y1="20" y2="4" />
            <line x1="6" x2="6" y1="20" y2="16" />
          </svg>
          <span>View Analytics</span>
        </Button>
      </div>
    </div>
  )
}
