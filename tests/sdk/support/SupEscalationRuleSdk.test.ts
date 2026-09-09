import { SupEscalationRuleClient } from "../../../packages/sdk/src/clients/support/SupEscalationRuleClient";

describe("SupEscalationRule SDK Client Integration Matrix", () => {
  const client = new SupEscalationRuleClient("test-api-key");

  test("fetches single SupEscalationRule via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("support");
  });

  test("lists SupEscalationRule entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
