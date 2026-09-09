import { InvPurchaseOrderItemClient } from "../../../packages/sdk/src/clients/inventory/InvPurchaseOrderItemClient";

describe("InvPurchaseOrderItem SDK Client Integration Matrix", () => {
  const client = new InvPurchaseOrderItemClient("test-api-key");

  test("fetches single InvPurchaseOrderItem via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("inventory");
  });

  test("lists InvPurchaseOrderItem entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
