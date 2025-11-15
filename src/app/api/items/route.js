import dbConnect from "@/lib/dbConnect";

// export async function GET() {
//   const data = await dbConnect("services").find({}).toArray();
//   return Response.json(data);
// }

export async function GET() {
  const collection = await dbConnect("services");
  const data = await collection.find({}).toArray();
  return Response.json(data);
}

export async function POST(req) {
  const postedData = await req.json();
  const collection = await dbConnect("services");
  const result = await collection.insertOne(postedData);
  return Response.json(result);
}
