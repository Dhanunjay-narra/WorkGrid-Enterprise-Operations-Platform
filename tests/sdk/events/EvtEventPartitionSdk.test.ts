import { EvtEventPartitionClient } from "../../../packages/sdk/src/clients/events/EvtEventPartitionClient";

describe("EvtEventPartition SDK Client Integration Matrix", () => {
  const client = new EvtEventPartitionClient("test-api-key");

  test("fetches single EvtEventPartition via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("events");
  });

  test("lists EvtEventPartition entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
