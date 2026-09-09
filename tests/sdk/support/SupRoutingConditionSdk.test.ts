import { SupRoutingConditionClient } from "../../../packages/sdk/src/clients/support/SupRoutingConditionClient";

describe("SupRoutingCondition SDK Client Integration Matrix", () => {
  const client = new SupRoutingConditionClient("test-api-key");

  test("fetches single SupRoutingCondition via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("support");
  });

  test("lists SupRoutingCondition entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
