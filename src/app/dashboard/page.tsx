'use client';
import { DEMO_USER, MOCK_CLIENTS, RECENT_ACTIVITY, STATS } from '@/lib/data';
import StatCard from '@/components/ui/StatCard';
import Card from '@/components/ui/Card';
import CardHeader from '@/components/ui/CardHeader';
import CardTitle from '@/components/ui/CardTitle';
import CardContent from '@/components/ui/CardContent';
import Badge from '@/components/ui/Badge';
import Avatar from '@/components/ui/Avatar';

export default function DashboardPage() {
  const today = new Date();
  const greeting = `Good morning, ${DEMO_USER.name}`;
  const date = today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div>
      <h1 className="mb-4">
        {greeting} on {date}
      </h1>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {STATS.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} icon={stat.icon} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Client List</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_CLIENTS.slice(0, 10).map((client, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                      <td>{client.name}</td>
                      <td>{client.email}</td>
                      <td>
                        <Badge variant={client.status === 'active' ? 'success' : 'warning'}>{client.status}</Badge>
                      </td>
                      <td>
                        <button className="mr-2">View</button>
                        <button>Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {RECENT_ACTIVITY.slice(0, 10).map((activity, index) => (
                  <li key={index} className="flex flex-row justify-between mb-2">
                    <Avatar initials={activity.user.initials} />
                    <span className="ml-2">{activity.action} {activity.timeAgo}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <button className="col-span-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          New Program
        </button>
        <button className="col-span-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send Notification
        </button>
        <button className="col-span-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Edit Client
        </button>
        <button className="col-span-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Goal
        </button>
      </div>
    </div>
  );
}