import { IntSyncQueueItemClient } from "../../../packages/sdk/src/clients/integrations/IntSyncQueueItemClient";

describe("IntSyncQueueItem SDK Client Integration Matrix", () => {
  const client = new IntSyncQueueItemClient("test-api-key");

  test("fetches single IntSyncQueueItem via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("integrations");
  });

  test("lists IntSyncQueueItem entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
