import { IdGroupMembershipClient } from "../../../packages/sdk/src/clients/identity/IdGroupMembershipClient";

describe("IdGroupMembership SDK Client Integration Matrix", () => {
  const client = new IdGroupMembershipClient("test-api-key");

  test("fetches single IdGroupMembership via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("identity");
  });

  test("lists IdGroupMembership entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
