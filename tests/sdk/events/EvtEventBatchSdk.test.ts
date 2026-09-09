import { EvtEventBatchClient } from "../../../packages/sdk/src/clients/events/EvtEventBatchClient";

describe("EvtEventBatch SDK Client Integration Matrix", () => {
  const client = new EvtEventBatchClient("test-api-key");

  test("fetches single EvtEventBatch via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("events");
  });

  test("lists EvtEventBatch entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
