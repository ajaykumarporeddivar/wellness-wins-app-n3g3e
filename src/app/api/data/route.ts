import { Response } from 'next';
import { businesses, programs, users } from '@/lib/data';

export async function GET(): Promise<Response> {
  return new Response(
    JSON.stringify({
      ok: true,
      data: {
        businesses: businesses,
        programs: programs,
        users: users,
        stats: {
          businessCount: businesses.length,
          programCount: programs.length,
          userCount: users.length,
        },
      },
    }),
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    }
  );
}

export async function POST(request: Request): Promise<Response> {
  const jsonData = await request.json();
  console.log(jsonData);
  return new Response(
    JSON.stringify({
      ok: true,
      message: 'Demo mode — data not persisted',
    }),
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    }
  );
}