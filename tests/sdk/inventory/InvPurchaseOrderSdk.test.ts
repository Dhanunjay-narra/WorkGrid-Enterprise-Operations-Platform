import { InvPurchaseOrderClient } from "../../../packages/sdk/src/clients/inventory/InvPurchaseOrderClient";

describe("InvPurchaseOrder SDK Client Integration Matrix", () => {
  const client = new InvPurchaseOrderClient("test-api-key");

  test("fetches single InvPurchaseOrder via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("inventory");
  });

  test("lists InvPurchaseOrder entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
