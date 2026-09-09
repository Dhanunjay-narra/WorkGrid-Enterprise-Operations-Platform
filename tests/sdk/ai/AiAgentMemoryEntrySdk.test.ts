import { AiAgentMemoryEntryClient } from "../../../packages/sdk/src/clients/ai/AiAgentMemoryEntryClient";

describe("AiAgentMemoryEntry SDK Client Integration Matrix", () => {
  const client = new AiAgentMemoryEntryClient("test-api-key");

  test("fetches single AiAgentMemoryEntry via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("ai");
  });

  test("lists AiAgentMemoryEntry entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
