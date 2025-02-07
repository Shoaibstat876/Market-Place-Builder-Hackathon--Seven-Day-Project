import { NextResponse } from "next/server";

export async function GET() {
  const categories = [
    {
      _id: "6001",
      title: "Wing Chair",
      imageUrl: "https://cdn.sanity.io/images/5x47y4y0/production/c692eaf301809a24f99f9d89e60f5ffb51b27925-424x424.png",
    },
    {
      _id: "6002",
      title: "Wooden Chair",
      imageUrl: "https://cdn.sanity.io/images/5x47y4y0/production/7735c535ae00fab5698283be6e398fed22b82126-424x424.png",
    },
    {
      _id: "6003",
      title: "Desk Chair",
      imageUrl: "https://cdn.sanity.io/images/5x47y4y0/production/8c286cbb3ef2bfd0a4632ab7ef7044cea8dc55d3-424x424.png",
    },
  ];

  return NextResponse.json(categories);
}
