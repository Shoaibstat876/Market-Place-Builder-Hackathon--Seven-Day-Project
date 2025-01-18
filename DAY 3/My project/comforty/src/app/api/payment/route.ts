// src/app/api/payment/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Simulate payment processing (replace with real payment logic like Stripe)
export async function POST(request: NextRequest) {
  const { orderId, totalPrice } = await request.json();
  
  // Simulating a successful payment process
  const paymentResult = {
    orderId,
    status: 'success',
    transactionId: Date.now().toString(),
    amount: totalPrice,
    message: 'Payment processed successfully!',
  };
  
  return NextResponse.json(paymentResult);
}
