import { NextResponse } from "next/server";
import { users } from "../data/users";

export async function GET(req, res) {
  return NextResponse.json(users);
}
