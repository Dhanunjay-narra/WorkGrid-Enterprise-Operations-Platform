import { SupSupportAgentClient } from "../../../packages/sdk/src/clients/support/SupSupportAgentClient";

describe("SupSupportAgent SDK Client Integration Matrix", () => {
  const client = new SupSupportAgentClient("test-api-key");

  test("fetches single SupSupportAgent via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("support");
  });

  test("lists SupSupportAgent entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
