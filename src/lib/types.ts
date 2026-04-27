import { IIconProp } from 'lucide-react/dist/react/types';

export interface Business {
  id: string;
  createdAt: string;
  name: string;
  email: string;
}

export interface User {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  role: 'Admin' | 'User';
  plan: 'Free' | 'Pro';
  avatar: IIconProp;
}

export interface Program {
  id: string;
  createdAt: string;
  businessId: string;
  name: string;
  description: string;
  goals: string[];
  resources: { id: string; name: string; type: 'article' | 'video' }[];
}

export interface ProgramClient {
  id: string;
  createdAt: string;
  programId: string;
  userId: string;
  enrolled: boolean;
  progress: number;
}

export interface Resource {
  id: string;
  createdAt: string;
  name: string;
  type: 'article' | 'video';
}

export interface Stat {
  id: string;
  createdAt: string;
  date: string;
  totalX: number;
  growthRate: string;
  monthlyRevenue: string;
  activeUsers: number;
}

export interface RecentActivity {
  id: string;
  createdAt: string;
  action: string;
  user: string;
  timestamp: string;
  type: 'program' | 'resource';
}

export interface ApiResponse<T> {
  ok: boolean;
  data?: T;
  error?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}