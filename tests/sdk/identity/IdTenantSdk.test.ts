import { IdTenantClient } from "../../../packages/sdk/src/clients/identity/IdTenantClient";

describe("IdTenant SDK Client Integration Matrix", () => {
  const client = new IdTenantClient("test-api-key");

  test("fetches single IdTenant via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("identity");
  });

  test("lists IdTenant entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
