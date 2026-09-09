import { EvtStreamSnapshotClient } from "../../../packages/sdk/src/clients/events/EvtStreamSnapshotClient";

describe("EvtStreamSnapshot SDK Client Integration Matrix", () => {
  const client = new EvtStreamSnapshotClient("test-api-key");

  test("fetches single EvtStreamSnapshot via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("events");
  });

  test("lists EvtStreamSnapshot entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
