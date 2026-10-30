import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} – ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logo = `data:image/png;base64,${await readFile(join(process.cwd(), "src/assets/arqivo-mark.png"), "base64")}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #040f2e 0%, #0a1f5c 55%, #1f55df 100%)",
          color: "white",
          padding: 80,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div style={{ display: "flex", background: "white", borderRadius: 28, padding: 20 }}>
            <img src={logo} width={120} height={94} alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: 6 }}>ARQIVO</div>
            <div style={{ fontSize: 30, color: "#8fb3ff", letterSpacing: 12 }}>LLP</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, letterSpacing: 8, color: "#bed3ff", textTransform: "uppercase" }}>{site.tagline}</div>
          <div style={{ fontSize: 54, fontWeight: 700, marginTop: 16 }}>{site.slogan.join("  |  ")}</div>
        </div>
      </div>
    ),
    size,
  );
}
