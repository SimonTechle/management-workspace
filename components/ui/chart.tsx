"use client"

import type * as React from "react"

const Chart = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full">{children}</div>
}

const ChartContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative">{children}</div>
}

const ChartLegend = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">{children}</div>
}

const ChartLegendItem = ({ name, color }: { name: string; color: string }) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="block h-2 w-2 rounded-full" style={{ backgroundColor: color }}></span>
      <span>{name}</span>
    </div>
  )
}

const ChartTooltip = ({ content }: { content: React.ReactNode }) => {
  return <div className="bg-white border rounded-md p-2 shadow-md">{content}</div>
}

const ChartTooltipContent = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

const ChartTooltipItem = ({ label, value, color }: { label: string; value: string; color: string }) => {
  return (
    <div className="flex items-center justify-between space-x-2">
      <span className="text-sm font-medium">{label}:</span>
      <span className="text-sm" style={{ color: color }}>
        {value}
      </span>
    </div>
  )
}

export { Chart, ChartContainer, ChartLegend, ChartLegendItem, ChartTooltip, ChartTooltipContent, ChartTooltipItem }
