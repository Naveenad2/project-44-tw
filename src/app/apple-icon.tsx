import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const logo = `data:image/png;base64,${await readFile(join(process.cwd(), "src/assets/arqivo-mark.png"), "base64")}`;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", background: "#ffffff" }}>
        <img src={logo} width={140} height={110} alt="" />
      </div>
    ),
    size,
  );
}
