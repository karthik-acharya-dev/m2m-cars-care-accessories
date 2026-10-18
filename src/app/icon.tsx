import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "#090a0c",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ff5500",
          fontWeight: 900,
          borderRadius: 4,
          border: "2px solid #ff5500",
          fontFamily: "system-ui, sans-serif",
          letterSpacing: "-1px",
        }}
      >
        M2M
      </div>
    ),
    {
      ...size,
    }
  );
}
