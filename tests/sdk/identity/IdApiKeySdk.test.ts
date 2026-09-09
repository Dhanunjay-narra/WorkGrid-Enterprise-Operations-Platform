import { IdApiKeyClient } from "../../../packages/sdk/src/clients/identity/IdApiKeyClient";

describe("IdApiKey SDK Client Integration Matrix", () => {
  const client = new IdApiKeyClient("test-api-key");

  test("fetches single IdApiKey via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("identity");
  });

  test("lists IdApiKey entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
