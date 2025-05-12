"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Building2,
  Wallet,
  Wrench,
  MessageSquare,
  FileText,
  BarChart3,
  Settings,
  Search,
  CheckSquare,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Sidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const mainNavItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Tasks", href: "/tasks", icon: CheckSquare },
    { name: "Finance", href: "/finance", icon: Wallet },
    { name: "Communication", href: "/communication", icon: MessageSquare },
    { name: "Documents", href: "/documents", icon: FileText },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
  ]

  const propertyNavItems = [
    { name: "Properties", href: "/properties", icon: Building2 },
    { name: "Tenants", href: "/tenants", icon: Users },
    { name: "Maintenance", href: "/maintenance", icon: Wrench },
    { name: "Leases", href: "/leases", icon: FileText },
  ]

  const integrationNavItems = [
    { name: "SeaTable", href: "/integrations/seatable", icon: FileText },
    { name: "SignRequest", href: "/integrations/signrequest", icon: FileText },
    { name: "Gmail", href: "/integrations/gmail", icon: MessageSquare },
    { name: "WhatsApp", href: "/integrations/whatsapp", icon: MessageSquare },
    { name: "Google Workspace", href: "/integrations/google", icon: FileText },
    { name: "Paysera", href: "/integrations/paysera", icon: Wallet },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar for desktop and mobile */}
      <div
        className={cn(
          "bg-white border-r border-gray-100 flex flex-col h-full transition-all duration-300 ease-in-out z-40",
          "fixed inset-y-0 left-0 lg:relative",
          isMobileMenuOpen ? "translate-x-0 w-64" : "-translate-x-full w-64 lg:translate-x-0",
        )}
      >
        <div className="p-4 border-b border-gray-100 flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-brand-600 flex items-center justify-center text-white font-bold">
            PM
          </div>
          <div className="font-semibold text-gray-900">Property Manager</div>
        </div>

        <div className="p-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-4 py-2 h-9 text-sm bg-gray-50 border-gray-200 focus-visible:ring-brand-500"
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-2">
          <div className="mb-4">
            <h2 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Main</h2>
            <ul className="space-y-1">
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn("sidebar-item", isActive ? "sidebar-item-active" : "sidebar-item-inactive")}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Property Management
            </h2>
            <ul className="space-y-1">
              {propertyNavItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn("sidebar-item", isActive ? "sidebar-item-active" : "sidebar-item-inactive")}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Integrations</h2>
            <ul className="space-y-1">
              {integrationNavItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn("sidebar-item", isActive ? "sidebar-item-active" : "sidebar-item-inactive")}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>

        <div className="p-3 border-t border-gray-100">
          <div className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors">
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">PM</span>
            </div>
            <div className="ml-3 flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-700 truncate">Property Manager</p>
              <p className="text-xs text-gray-500 truncate">admin@propertymanager.com</p>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
          <Button
            variant="outline"
            className="w-full mt-2 text-gray-600 border-gray-200 hover:bg-gray-100 hover:text-gray-700"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign out
          </Button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/20 z-30 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  )
}
