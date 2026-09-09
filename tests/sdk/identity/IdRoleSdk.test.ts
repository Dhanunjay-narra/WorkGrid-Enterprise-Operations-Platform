import { IdRoleClient } from "../../../packages/sdk/src/clients/identity/IdRoleClient";

describe("IdRole SDK Client Integration Matrix", () => {
  const client = new IdRoleClient("test-api-key");

  test("fetches single IdRole via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("identity");
  });

  test("lists IdRole entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
