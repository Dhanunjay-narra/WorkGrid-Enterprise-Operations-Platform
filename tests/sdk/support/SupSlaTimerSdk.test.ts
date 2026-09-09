import { SupSlaTimerClient } from "../../../packages/sdk/src/clients/support/SupSlaTimerClient";

describe("SupSlaTimer SDK Client Integration Matrix", () => {
  const client = new SupSlaTimerClient("test-api-key");

  test("fetches single SupSlaTimer via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("support");
  });

  test("lists SupSlaTimer entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
