import { NextResponse } from "next/server";

const todayDate = new Date().getFullYear();
const footerData = {
  copyright: `© ${todayDate} ZeroStart. All Rights Reserved`,
};

export const GET = async () => {
  return NextResponse.json({
    footerData,
  });
};
