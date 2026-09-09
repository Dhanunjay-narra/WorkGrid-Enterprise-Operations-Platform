import { IdPolicyClient } from "../../../packages/sdk/src/clients/identity/IdPolicyClient";

describe("IdPolicy SDK Client Integration Matrix", () => {
  const client = new IdPolicyClient("test-api-key");

  test("fetches single IdPolicy via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("identity");
  });

  test("lists IdPolicy entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
