"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function GreenChampions() {
  const champions = [
    {
      name: "Priya Sharma",
      area: "Sector 15, Noida",
      score: 95,
      reports: 23,
      status: "Gold Champion",
    },
    {
      name: "Rajesh Kumar",
      area: "MG Road, Bangalore",
      score: 88,
      reports: 18,
      status: "Silver Champion",
    },
    {
      name: "Anita Patel",
      area: "Bandra West, Mumbai",
      score: 92,
      reports: 21,
      status: "Gold Champion",
    },
  ]

  const myStats = {
    rank: 4,
    score: 76,
    reports: 12,
    area: "Connaught Place, Delhi",
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Green Champions Network</h2>
        <p className="text-muted-foreground">Community leaders monitoring waste management in their areas</p>
      </div>

      {/* My Champion Status */}
      <Card className="border-0 bg-gradient-to-r from-primary/10 to-accent/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
            Your Champion Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">#{myStats.rank}</p>
              <p className="text-xs text-muted-foreground">Area Rank</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">{myStats.score}</p>
              <p className="text-xs text-muted-foreground">Champion Score</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">{myStats.reports}</p>
              <p className="text-xs text-muted-foreground">Reports Filed</p>
            </div>
            <div className="text-center">
              <Badge variant="secondary" className="bg-bronze text-bronze-foreground">
                Bronze Champion
              </Badge>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">Monitoring: {myStats.area}</p>
          </div>
        </CardContent>
      </Card>

      {/* Top Champions Leaderboard */}
      <Card className="border-0 bg-card/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
              <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
              <path d="M15 2v5h5" />
            </svg>
            Top Champions This Month
          </CardTitle>
          <CardDescription>Leading waste management monitors in your city</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {champions.map((champion, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-muted-foreground">#{index + 1}</span>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs">
                        {champion.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className="font-medium">{champion.name}</p>
                    <p className="text-xs text-muted-foreground">{champion.area}</p>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <Badge variant={champion.status.includes("Gold") ? "default" : "secondary"}>{champion.status}</Badge>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>Score: {champion.score}</span>
                    <span>Reports: {champion.reports}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Champion Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button className="h-auto p-4 flex-col gap-2">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="m7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span>Report Waste Violation</span>
          <span className="text-xs opacity-70">Upload photos of improper waste disposal</span>
        </Button>
        <Button variant="outline" className="h-auto p-4 flex-col gap-2 bg-transparent">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>Monitor Collection Routes</span>
          <span className="text-xs opacity-70">Track waste collection in your area</span>
        </Button>
      </div>
    </div>
  )
}
