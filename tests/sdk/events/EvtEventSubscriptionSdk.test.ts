import { EvtEventSubscriptionClient } from "../../../packages/sdk/src/clients/events/EvtEventSubscriptionClient";

describe("EvtEventSubscription SDK Client Integration Matrix", () => {
  const client = new EvtEventSubscriptionClient("test-api-key");

  test("fetches single EvtEventSubscription via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("events");
  });

  test("lists EvtEventSubscription entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
