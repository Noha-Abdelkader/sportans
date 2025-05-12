import { API_HEADER, JSON_HEADER } from "@/lib/constants/api.constant";
import { API_Response } from "@/lib/types/api-response";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  // const { searchParams } = new URL(request.url);
  // const limit = searchParams.get("limit") || 10;
  const offset = searchParams.get("offset") || 10;

// console.log(process.env.BASE_URL , 'bas url')
  // return 20;
  if (!process.env.BASE_URL) {
    return NextResponse.json(
      { error: "Server configuration error - BASE_URL not set" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `${process.env.BASE_URL}/american-football/highlights?limit=10&offset=${offset}`,
      {
        method: "GET",
        headers: {
          ...JSON_HEADER,
          ...API_HEADER,
        },
      }
    );

    const payload: API_Response<HighlightResponse> = await response.json();

    if ("error" in payload) {
      throw new Error(payload.error);
    }

    // // Safely handle the data transformation
    // const transformedData =
    //   payload.data?.map((element, index) => {
    //     const galleryIndex = !events_gallery[index] ? 0 : index; // Ensure we don't go out of bounds
    //     return {
    //       ...element,
    //       src: events_gallery[galleryIndex] || "", // Fallback if undefined
    //     };
    //   }) || [];

    // const editPayload: API_Response<HighlightResponse> = {
    //   ...payload,
    //   data: [...transformedData],
    // };

    // console.log(transformedData, "tras");
    return NextResponse.json(payload);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
