'use client';
import { AiOutlineUser } from 'lucide-react';
import { Cog6Tooth, Heart, List, PieChart, Rocket, Trophy } from 'lucide-react';
import AppSidebar from '@/components/layout/AppSidebar';
import AppHeader from '@/components/layout/AppHeader';
import DemoBanner from '@/components/layout/DemoBanner';

const navItems = [
  { name: 'Programs', href: '/dashboard/programs', icon: Heart },
  { name: 'Clients', href: '/dashboard/clients', icon: AiOutlineUser },
  { name: 'Content Library', href: '/dashboard/content-library', icon: List },
  { name: 'Reports', href: '/dashboard/reports', icon: PieChart },
  { name: 'Settings', href: '/dashboard/settings', icon: Cog6Tooth },
  { name: 'Goals', href: '/dashboard/goals', icon: Trophy },
  { name: 'Activity', href: '/dashboard/activity', icon: Rocket },
];

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen flex-col">
      <AppHeader className="fixed top-0 z-10" />
      <DemoBanner className="fixed top-14 z-10" />
      <div className="flex flex-1 flex-row">
        <AppSidebar navItems={navItems} />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}