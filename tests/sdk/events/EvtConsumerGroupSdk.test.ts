import { EvtConsumerGroupClient } from "../../../packages/sdk/src/clients/events/EvtConsumerGroupClient";

describe("EvtConsumerGroup SDK Client Integration Matrix", () => {
  const client = new EvtConsumerGroupClient("test-api-key");

  test("fetches single EvtConsumerGroup via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("events");
  });

  test("lists EvtConsumerGroup entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
