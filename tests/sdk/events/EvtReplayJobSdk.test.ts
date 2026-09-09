import { EvtReplayJobClient } from "../../../packages/sdk/src/clients/events/EvtReplayJobClient";

describe("EvtReplayJob SDK Client Integration Matrix", () => {
  const client = new EvtReplayJobClient("test-api-key");

  test("fetches single EvtReplayJob via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("events");
  });

  test("lists EvtReplayJob entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
