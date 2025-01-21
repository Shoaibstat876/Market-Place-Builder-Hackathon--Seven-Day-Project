import { NextResponse } from "next/server";

export async function GET() {
  const categories = [
    {
      _id: "26fd7176-3c4d-40fc-a73a-3b85a9b5e15f",
      title: "Wing Chair",
      imageUrl: "https://cdn.sanity.io/images/5x47y4y0/production/c692eaf301809a24f99f9d89e60f5ffb51b27925-424x424.png",
    },
    {
      _id: "407a8583-6203-4f61-becf-8e8b4c5461b6",
      title: "Wooden Chair",
      imageUrl: "https://cdn.sanity.io/images/5x47y4y0/production/7735c535ae00fab5698283be6e398fed22b82126-424x424.png",
    },
    {
      _id: "b5710116-09af-4d0e-aa9a-dcd02fe919a9",
      title: "Desk Chair",
      imageUrl: "https://cdn.sanity.io/images/5x47y4y0/production/8c286cbb3ef2bfd0a4632ab7ef7044cea8dc55d3-424x424.png",
    },
  ];

  return NextResponse.json(categories);
}
