import { IntWebhookEventLogClient } from "../../../packages/sdk/src/clients/integrations/IntWebhookEventLogClient";

describe("IntWebhookEventLog SDK Client Integration Matrix", () => {
  const client = new IntWebhookEventLogClient("test-api-key");

  test("fetches single IntWebhookEventLog via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("integrations");
  });

  test("lists IntWebhookEventLog entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
