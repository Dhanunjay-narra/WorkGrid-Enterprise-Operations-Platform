import { InvGoodsReceiptClient } from "../../../packages/sdk/src/clients/inventory/InvGoodsReceiptClient";

describe("InvGoodsReceipt SDK Client Integration Matrix", () => {
  const client = new InvGoodsReceiptClient("test-api-key");

  test("fetches single InvGoodsReceipt via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("inventory");
  });

  test("lists InvGoodsReceipt entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
