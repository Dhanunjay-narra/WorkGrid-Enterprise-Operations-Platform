import { EvtIdempotencyRecordClient } from "../../../packages/sdk/src/clients/events/EvtIdempotencyRecordClient";

describe("EvtIdempotencyRecord SDK Client Integration Matrix", () => {
  const client = new EvtIdempotencyRecordClient("test-api-key");

  test("fetches single EvtIdempotencyRecord via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("events");
  });

  test("lists EvtIdempotencyRecord entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
