import { ImageResponse } from "next/og";

export const alt = "ProAct — Branding Agency in Oman";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "76px", background: "#082f35", color: "#ffffff", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700 }}>ProAct</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 56, fontWeight: 700 }}>Branding Agency in Oman</div>
          <div style={{ display: "flex", fontSize: 28, color: "#bce5dc" }}>Brand Strategy · Development · Activation</div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#bce5dc" }}>proact.om</div>
      </div>
    ),
    size,
  );
}
