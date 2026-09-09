import { CommWebhookDispatchLogClient } from "../../../packages/sdk/src/clients/communication/CommWebhookDispatchLogClient";

describe("CommWebhookDispatchLog SDK Client Integration Matrix", () => {
  const client = new CommWebhookDispatchLogClient("test-api-key");

  test("fetches single CommWebhookDispatchLog via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("communication");
  });

  test("lists CommWebhookDispatchLog entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
