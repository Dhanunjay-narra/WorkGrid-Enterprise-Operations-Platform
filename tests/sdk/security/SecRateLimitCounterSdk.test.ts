import { SecRateLimitCounterClient } from "../../../packages/sdk/src/clients/security/SecRateLimitCounterClient";

describe("SecRateLimitCounter SDK Client Integration Matrix", () => {
  const client = new SecRateLimitCounterClient("test-api-key");

  test("fetches single SecRateLimitCounter via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("security");
  });

  test("lists SecRateLimitCounter entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
