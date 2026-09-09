import { IdSsoConfigClient } from "../../../packages/sdk/src/clients/identity/IdSsoConfigClient";

describe("IdSsoConfig SDK Client Integration Matrix", () => {
  const client = new IdSsoConfigClient("test-api-key");

  test("fetches single IdSsoConfig via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("identity");
  });

  test("lists IdSsoConfig entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
