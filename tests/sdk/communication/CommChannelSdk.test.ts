import { CommChannelClient } from "../../../packages/sdk/src/clients/communication/CommChannelClient";

describe("CommChannel SDK Client Integration Matrix", () => {
  const client = new CommChannelClient("test-api-key");

  test("fetches single CommChannel via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("communication");
  });

  test("lists CommChannel entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
