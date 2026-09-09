import { EvtAckReceiptClient } from "../../../packages/sdk/src/clients/events/EvtAckReceiptClient";

describe("EvtAckReceipt SDK Client Integration Matrix", () => {
  const client = new EvtAckReceiptClient("test-api-key");

  test("fetches single EvtAckReceipt via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("events");
  });

  test("lists EvtAckReceipt entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
