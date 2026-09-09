import { AiModelRoutingRuleClient } from "../../../packages/sdk/src/clients/ai/AiModelRoutingRuleClient";

describe("AiModelRoutingRule SDK Client Integration Matrix", () => {
  const client = new AiModelRoutingRuleClient("test-api-key");

  test("fetches single AiModelRoutingRule via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("ai");
  });

  test("lists AiModelRoutingRule entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
