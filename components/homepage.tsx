"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrainingModule } from "./training-module"
import { GreenChampions } from "./green-champions"
import { WasteTracking } from "./waste-tracking"
import { PhotoReporting } from "./photo-reporting"
import { useState } from "react"

export function Homepage() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const stats = [
    { label: "Daily Waste Generated", value: "1.7L tons", trend: "National" },
    { label: "Treatment Rate", value: "54%", trend: "CPCB 2022" },
    { label: "Active Facilities", value: "1,068", trend: "WTE+Biomass" },
    { label: "Registered Citizens", value: "2.1M", trend: "+25%" },
  ]

  const wasteTypes = [
    { name: "Organic Waste", percentage: 45, color: "bg-green-500" },
    { name: "Recyclables", percentage: 30, color: "bg-blue-500" },
    { name: "General Waste", percentage: 20, color: "bg-gray-500" },
    { name: "Hazardous", percentage: 5, color: "bg-red-500" },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case "training":
        return <TrainingModule />
      case "champions":
        return <GreenChampions />
      case "tracking":
        return <WasteTracking />
      case "reporting":
        return <PhotoReporting />
      default:
        return (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-balance">India's Smart Waste Management Solution</h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
                Addressing India's 1.7 lakh tonnes daily waste challenge through citizen training, community monitoring,
                and digital tracking systems.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="border-0 bg-card/60 backdrop-blur-sm hover:bg-card/80 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <div className="flex items-center text-sm text-accent">
                          <svg
                            className="h-3 w-3 mr-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
                            <polyline points="16,7 22,7 22,13" />
                          </svg>
                          {stat.trend}
                        </div>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <svg
                          className="h-6 w-6 text-primary"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <line x1="18" x2="18" y1="20" y2="4" />
                          <line x1="12" x2="12" y1="20" y2="4" />
                          <line x1="6" x2="6" y1="20" y2="10" />
                        </svg>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Waste Composition */}
              <Card className="border-0 bg-card/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="12" x2="12" y1="20" y2="10" />
                      <line x1="18" x2="18" y1="20" y2="4" />
                      <line x1="6" x2="6" y1="20" y2="16" />
                    </svg>
                    Waste Composition Analysis
                  </CardTitle>
                  <CardDescription>National breakdown of municipal solid waste types</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {wasteTypes.map((type, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{type.name}</span>
                        <span className="font-medium">{type.percentage}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${type.color} transition-all duration-500`}
                          style={{ width: `${type.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                    National Activity Feed
                  </CardTitle>
                  <CardDescription>Real-time updates from India's waste management network</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                        <svg
                          className="h-4 w-4 text-green-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22,4 12,14.01 9,11.01" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">1,247 citizens completed training</p>
                        <p className="text-xs text-muted-foreground">Mandatory waste segregation course</p>
                        <p className="text-xs text-muted-foreground">Today</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                        <svg
                          className="h-4 w-4 text-blue-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                          <circle cx="12" cy="13" r="3" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">89 waste violations reported</p>
                        <p className="text-xs text-muted-foreground">Photo reports from Green Champions</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100">
                        <svg
                          className="h-4 w-4 text-orange-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M2 20h20" />
                          <path d="M4 20V10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10" />
                          <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">New WTE plant operational</p>
                        <p className="text-xs text-muted-foreground">Capacity: 500 TPD - Hyderabad</p>
                        <p className="text-xs text-muted-foreground">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button size="lg" className="h-auto p-4 flex-col gap-2" onClick={() => setActiveTab("training")}>
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                <span>Citizen Training</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-auto p-4 flex-col gap-2 bg-transparent"
                onClick={() => setActiveTab("champions")}
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
                <span>Green Champions</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-auto p-4 flex-col gap-2 bg-transparent"
                onClick={() => setActiveTab("tracking")}
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" x2="12" y1="20" y2="10" />
                  <line x1="18" x2="18" y1="20" y2="4" />
                  <line x1="6" x2="6" y1="20" y2="16" />
                </svg>
                <span>Waste Tracking</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-auto p-4 flex-col gap-2 bg-transparent"
                onClick={() => setActiveTab("reporting")}
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
                <span>Photo Reports</span>
              </Button>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-secondary">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                <svg
                  className="h-5 w-5 text-primary-foreground"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 19H6.5a2.5 2.5 0 0 1 0-5H14" />
                  <path d="m11 17-3-3 3-3" />
                  <path d="M20.5 11H19a2.5 2.5 0 0 0 0 5h1.5" />
                  <path d="m13 7 3 3-3 3" />
                  <path d="M12 1v6" />
                  <path d="m8 8 4-4 4 4" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ECOX
                </h1>
                <p className="text-xs text-muted-foreground">Smart Waste Management</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="bg-accent/20 text-accent-foreground cursor-pointer hover:bg-accent/30 transition-colors"
                onClick={() => {
                  // You can add functionality here - maybe show eco tips or navigate somewhere
                  alert("Eco-Friendly features coming soon!")
                }}
              >
                <svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
                Eco-Friendly
              </Badge>
              <div className="hidden md:flex items-center gap-1 ml-4">
                <Button
                  variant={activeTab === "dashboard" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab("dashboard")}
                >
                  Dashboard
                </Button>
                <Button
                  variant={activeTab === "training" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab("training")}
                >
                  Training
                </Button>
                <Button
                  variant={activeTab === "champions" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab("champions")}
                >
                  Champions
                </Button>
                <Button
                  variant={activeTab === "tracking" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab("tracking")}
                >
                  Tracking
                </Button>
                <Button
                  variant={activeTab === "reporting" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab("reporting")}
                >
                  Reports
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">{renderContent()}</main>
    </div>
  )
}
