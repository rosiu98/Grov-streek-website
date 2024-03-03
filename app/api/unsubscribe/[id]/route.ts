import { supabase } from "@/libs/supabase";
import { unstable_noStore } from "next/cache";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

interface Params {
  id: string;
}

export const GET = async (req: NextRequest, { params }: { params: Params }) => {
  unstable_noStore();
  try {
    console.log(params);

    const id = Buffer.from(params.id, "base64").toString();

    const { error } = await supabase
      .from("newsletter")
      .delete()
      .eq("id", Number(id));

    if (error) {
      return new Response(
        JSON.stringify({ message: "Unsubscribe failed", error: error.message }),
        { status: 400 }
      );
    }

    return new Response(
      JSON.stringify({
        id,
        message: "You have been unsubscribed successfully!",
      }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Unsubscribe failed:", error.message);
    return new Response(
      JSON.stringify({ message: "Unsubscribe failed", error: error.message }),
      { status: 400 }
    );
  }
};
