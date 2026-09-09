import { SupQueueClient } from "../../../packages/sdk/src/clients/support/SupQueueClient";

describe("SupQueue SDK Client Integration Matrix", () => {
  const client = new SupQueueClient("test-api-key");

  test("fetches single SupQueue via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("support");
  });

  test("lists SupQueue entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
