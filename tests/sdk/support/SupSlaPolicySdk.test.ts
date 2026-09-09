import { SupSlaPolicyClient } from "../../../packages/sdk/src/clients/support/SupSlaPolicyClient";

describe("SupSlaPolicy SDK Client Integration Matrix", () => {
  const client = new SupSlaPolicyClient("test-api-key");

  test("fetches single SupSlaPolicy via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("support");
  });

  test("lists SupSlaPolicy entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
