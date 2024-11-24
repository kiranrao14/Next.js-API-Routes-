

import { NextResponse } from "next/server";

const EXTERNAL_API_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function GET() {
  try {
    const response = await fetch(EXTERNAL_API_URL);
    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: "Failed to fetch the data from the API" },
        { status: response.status }
      );
    }
    const data = await response.json();

    return NextResponse.json({
      success: true,
      data
    });

  } catch (error: unknown) { // Changed `any` to `unknown`
    if (error instanceof Error) { // Check if the error is an instance of Error
      return NextResponse.json({
        success: false,
        message: 'Failed to get the error',
        error: error.message
      });
    } else {
      // In case it's not an instance of Error, handle it as a general error
      return NextResponse.json({
        success: false,
        message: 'An unknown error occurred',
        error: String(error)
      });
    }
  }
}
