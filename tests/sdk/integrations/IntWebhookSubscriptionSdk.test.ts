import { IntWebhookSubscriptionClient } from "../../../packages/sdk/src/clients/integrations/IntWebhookSubscriptionClient";

describe("IntWebhookSubscription SDK Client Integration Matrix", () => {
  const client = new IntWebhookSubscriptionClient("test-api-key");

  test("fetches single IntWebhookSubscription via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("integrations");
  });

  test("lists IntWebhookSubscription entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
