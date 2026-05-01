export const config = { runtime: "edge" };
const _0x4a1f = (process["env"]["TARGET_DOMAIN"] || "")["replace"](/\/$/, "");
const _0x3b2e = new Set([
  "host",
  "connection",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
  "forwarded",
  "x-forwarded-host",
  "x-forwarded-proto",
  "x-forwarded-port",
]);
export default async function handler(_0x1c3d) {
  if (!_0x4a1f)
    return new Response(
      "\x4d\x69\x73\x63\x6f\x6e\x66\x69\x67\x75\x72\x65\x64\x3a\x20\x54\x41\x52\x47\x45\x54\x5f\x44\x4f\x4d\x41\x49\x4e\x20\x69\x73\x20\x6e\x6f\x74\x20\x73\x65\x74",
      { status: 0x1f4 },
    );
  try {
    const _0x9e7a = _0x1c3d["url"]["indexOf"]("\x2f", 0x8);
    const _0x5f2b =
      _0x9e7a === -0x1
        ? _0x4a1f + "\x2f"
        : _0x4a1f + _0x1c3d["url"]["slice"](_0x9e7a);
    const _0x8d4c = new Headers();
    let _0x2a6f = null;
    for (const [_0x7e1b, _0xc3d9] of _0x1c3d["headers"]) {
      if (_0x3b2e["has"](_0x7e1b)) continue;
      if (_0x7e1b["startsWith"]("\x78\x2d\x76\x65\x72\x63\x65\x6c\x2d"))
        continue;
      if (_0x7e1b === "\x78\x2d\x72\x65\x61\x6c\x2d\x69\x70") {
        _0x2a6f = _0xc3d9;
        continue;
      }
      if (
        _0x7e1b ===
        "\x78\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x66\x6f\x72"
      ) {
        if (!_0x2a6f) _0x2a6f = _0xc3d9;
        continue;
      }
      _0x8d4c["set"](_0x7e1b, _0xc3d9);
    }
    if (_0x2a6f)
      _0x8d4c["set"](
        "\x78\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x66\x6f\x72",
        _0x2a6f,
      );
    const _0x6b3a = _0x1c3d["method"];
    const _0xd1e8 =
      _0x6b3a !== "\x47\x45\x54" && _0x6b3a !== "\x48\x45\x41\x44";
    return await fetch(_0x5f2b, {
      method: _0x6b3a,
      headers: _0x8d4c,
      body: _0xd1e8 ? _0x1c3d["body"] : undefined,
      duplex: "\x68\x61\x6c\x66",
      redirect: "\x6d\x61\x6e\x75\x61\x6c",
    });
  } catch (_0xf4b2) {
    console["error"](
      "\x72\x65\x6c\x61\x79\x20\x65\x72\x72\x6f\x72\x3a",
      _0xf4b2,
    );
    return new Response(
      "\x42\x61\x64\x20\x47\x61\x74\x65\x77\x61\x79\x3a\x20\x54\x75\x6e\x6e\x65\x6c\x20\x46\x61\x69\x6c\x65\x64",
      { status: 0x1f6 },
    );
  }
}
