import { AiToolDefinitionClient } from "../../../packages/sdk/src/clients/ai/AiToolDefinitionClient";

describe("AiToolDefinition SDK Client Integration Matrix", () => {
  const client = new AiToolDefinitionClient("test-api-key");

  test("fetches single AiToolDefinition via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("ai");
  });

  test("lists AiToolDefinition entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
