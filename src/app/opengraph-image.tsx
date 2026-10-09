import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Cloudastral — Cloud Infrastructure & Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#fafaff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 18% 20%, rgba(124,58,237,0.22), transparent 55%), radial-gradient(circle at 85% 15%, rgba(79,70,229,0.20), transparent 55%), radial-gradient(circle at 55% 85%, rgba(225,29,88,0.14), transparent 55%)",
          }}
        />
        <img
          src={logoSrc}
          alt=""
          width={180}
          height={180}
          style={{ position: "relative" }}
        />
        <div
          style={{
            position: "relative",
            marginTop: 28,
            fontSize: 64,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#15162b",
          }}
        >
          cloudastral
        </div>
        <div
          style={{
            position: "relative",
            marginTop: 14,
            fontSize: 28,
            color: "#4e5069",
          }}
        >
          Cloud Infrastructure &amp; Engineering
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            height: 14,
            background:
              "linear-gradient(90deg, #4F46E5 0%, #7C3AED 55%, #E11D58 100%)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
