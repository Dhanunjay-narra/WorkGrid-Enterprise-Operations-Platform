import { SecIpAllowlistRuleClient } from "../../../packages/sdk/src/clients/security/SecIpAllowlistRuleClient";

describe("SecIpAllowlistRule SDK Client Integration Matrix", () => {
  const client = new SecIpAllowlistRuleClient("test-api-key");

  test("fetches single SecIpAllowlistRule via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("security");
  });

  test("lists SecIpAllowlistRule entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
