import { NextRequest, NextResponse } from 'next/server';

// Define the user type
interface User {
  username: string;
  password: string; // No hashing, storing plain text password temporarily
}

// Temporary user database (replace with actual database later)
const users: User[] = [];

// User Signup
export async function POST(request: NextRequest) {
  const { username, password }: User = await request.json();

  // Check if user already exists
  const existingUser = users.find(user => user.username === username);

  if (existingUser) {
    return NextResponse.json({ message: 'User already exists' }, { status: 400 });
  }

  const newUser: User = { username, password }; // Storing plain text password for now
  users.push(newUser);

  return NextResponse.json({ message: 'User created successfully' });
}

// User Login
export async function POST_LOGIN(request: NextRequest) {
  const { username, password }: User = await request.json();

  // Find the user by username
  const user = users.find(user => user.username === username);

  if (!user) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  // Check if the password matches (plain text comparison for now)
  if (user.password !== password) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  return NextResponse.json({ message: 'Login successful' });
}
