import { IdSecurityKeyClient } from "../../../packages/sdk/src/clients/identity/IdSecurityKeyClient";

describe("IdSecurityKey SDK Client Integration Matrix", () => {
  const client = new IdSecurityKeyClient("test-api-key");

  test("fetches single IdSecurityKey via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("identity");
  });

  test("lists IdSecurityKey entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
