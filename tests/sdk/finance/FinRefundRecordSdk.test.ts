import { FinRefundRecordClient } from "../../../packages/sdk/src/clients/finance/FinRefundRecordClient";

describe("FinRefundRecord SDK Client Integration Matrix", () => {
  const client = new FinRefundRecordClient("test-api-key");

  test("fetches single FinRefundRecord via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("finance");
  });

  test("lists FinRefundRecord entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
