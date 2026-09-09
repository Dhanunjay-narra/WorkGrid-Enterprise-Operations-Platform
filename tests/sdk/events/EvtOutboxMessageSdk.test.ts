import { EvtOutboxMessageClient } from "../../../packages/sdk/src/clients/events/EvtOutboxMessageClient";

describe("EvtOutboxMessage SDK Client Integration Matrix", () => {
  const client = new EvtOutboxMessageClient("test-api-key");

  test("fetches single EvtOutboxMessage via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("events");
  });

  test("lists EvtOutboxMessage entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
