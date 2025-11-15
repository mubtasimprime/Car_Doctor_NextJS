import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } = await params;
  const collection = await dbConnect("services");

  const item = await collection.findOne({ _id: new ObjectId(id) });
  return Response.json(item);
}

// export async function DELETE(req, params) {
//   const p = await params;
//   console.log(p);
//   return Response.json({ params: p });
// }

export async function PATCH(req, { params }) {
  const { id } = await params;
  const collection = dbConnect("services");
  const postedData = req.json();

  const filter = { _id: new ObjectId(id) };

  const updatedResponse = await collection.updateOne(filter, {
    $set: postedData,
  });

  return Response.json({ message: "Item updated", updatedResponse });
}
