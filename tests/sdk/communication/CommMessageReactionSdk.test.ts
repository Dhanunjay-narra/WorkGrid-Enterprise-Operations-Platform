import { CommMessageReactionClient } from "../../../packages/sdk/src/clients/communication/CommMessageReactionClient";

describe("CommMessageReaction SDK Client Integration Matrix", () => {
  const client = new CommMessageReactionClient("test-api-key");

  test("fetches single CommMessageReaction via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("communication");
  });

  test("lists CommMessageReaction entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
