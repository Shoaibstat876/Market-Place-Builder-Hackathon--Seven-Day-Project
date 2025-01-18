import { NextRequest, NextResponse } from 'next/server';

// Define the cart item type
interface CartItem {
  productId: number;
  quantity: number;
  price: number;
  productName: string;  // Optionally, add a product name or description
}

// Simple in-memory cart (this could be replaced with session or database logic later)
let cart: CartItem[] = [];

// Get current cart
export async function GET() {
  return NextResponse.json(cart);
}

// Add product to cart
export async function POST(request: NextRequest) {
  const { productId, quantity, price, productName }: { productId: number; quantity: number; price: number; productName: string } = await request.json();

  if (quantity <= 0) {
    return NextResponse.json({ error: "Quantity must be greater than zero." }, { status: 400 });
  }

  // Check for existing product and update quantity or add new item
  const existingProduct = cart.find(item => item.productId === productId);

  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cart.push({ productId, quantity, price, productName });
  }

  return NextResponse.json({ message: "Product added to cart", cart });
}

// Update product quantity in cart
export async function PUT(request: NextRequest) {
  const { productId, quantity }: { productId: number; quantity: number } = await request.json();

  if (quantity <= 0) {
    return NextResponse.json({ error: "Quantity must be greater than zero." }, { status: 400 });
  }

  const product = cart.find(item => item.productId === productId);

  if (product) {
    product.quantity = quantity;
  } else {
    return NextResponse.json({ error: "Product not found in cart." }, { status: 404 });
  }

  return NextResponse.json({ message: "Cart updated", cart });
}

// Remove product from cart
export async function DELETE(request: NextRequest) {
  const { productId }: { productId: number } = await request.json();

  const productIndex = cart.findIndex(item => item.productId === productId);

  if (productIndex === -1) {
    return NextResponse.json({ error: "Product not found in cart." }, { status: 404 });
  }

  cart.splice(productIndex, 1);  // Remove the product from the cart
  return NextResponse.json({ message: "Product removed from cart", cart });
}
