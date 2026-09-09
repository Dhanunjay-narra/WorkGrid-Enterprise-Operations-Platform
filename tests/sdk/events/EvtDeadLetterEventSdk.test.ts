import { EvtDeadLetterEventClient } from "../../../packages/sdk/src/clients/events/EvtDeadLetterEventClient";

describe("EvtDeadLetterEvent SDK Client Integration Matrix", () => {
  const client = new EvtDeadLetterEventClient("test-api-key");

  test("fetches single EvtDeadLetterEvent via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("events");
  });

  test("lists EvtDeadLetterEvent entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
