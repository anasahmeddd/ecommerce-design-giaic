
import { productData } from '@/lib/bigContants';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
    try {

        if (!params.slug) {
            return NextResponse.json({ error: "Product- not found" }, { status: 404 });
        }

        const product = productData.find((i) => i.slug === params.slug);

        return NextResponse.json(product);
    } catch (err) {
        console.error("Error fetching products:", err);
        return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
    }
}
