
import { productData } from '@/lib/bigContants';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const productStart = searchParams.get('start')!;
        const productEnd = searchParams.get('end')!;
        const products = productData.slice(Number(productStart), Number(productEnd));

        return NextResponse.json(products);
    } catch (err) {
        console.error("Error fetching products:", err);
        return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
    }
}
