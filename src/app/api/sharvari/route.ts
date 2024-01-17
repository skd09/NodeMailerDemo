import { cookies } from 'next/headers'
 
export async function GET(request: Request) {
  const cookieStore = cookies()
  const token = cookieStore.get('token')
 
  return new Response('Hello from sharvari', {
    status: 200,
    // headers: { 'Set-Cookie': 'token=${token.value}' },
  })
}