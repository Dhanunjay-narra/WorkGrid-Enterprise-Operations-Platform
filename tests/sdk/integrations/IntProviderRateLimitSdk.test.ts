import { IntProviderRateLimitClient } from "../../../packages/sdk/src/clients/integrations/IntProviderRateLimitClient";

describe("IntProviderRateLimit SDK Client Integration Matrix", () => {
  const client = new IntProviderRateLimitClient("test-api-key");

  test("fetches single IntProviderRateLimit via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("integrations");
  });

  test("lists IntProviderRateLimit entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
