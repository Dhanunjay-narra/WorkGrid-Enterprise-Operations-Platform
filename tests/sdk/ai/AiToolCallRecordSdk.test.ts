import { AiToolCallRecordClient } from "../../../packages/sdk/src/clients/ai/AiToolCallRecordClient";

describe("AiToolCallRecord SDK Client Integration Matrix", () => {
  const client = new AiToolCallRecordClient("test-api-key");

  test("fetches single AiToolCallRecord via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("ai");
  });

  test("lists AiToolCallRecord entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
