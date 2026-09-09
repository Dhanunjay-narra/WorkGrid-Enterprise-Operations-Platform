import { AiModelFallbackLogClient } from "../../../packages/sdk/src/clients/ai/AiModelFallbackLogClient";

describe("AiModelFallbackLog SDK Client Integration Matrix", () => {
  const client = new AiModelFallbackLogClient("test-api-key");

  test("fetches single AiModelFallbackLog via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("ai");
  });

  test("lists AiModelFallbackLog entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
