import { InvStockLevelClient } from "../../../packages/sdk/src/clients/inventory/InvStockLevelClient";

describe("InvStockLevel SDK Client Integration Matrix", () => {
  const client = new InvStockLevelClient("test-api-key");

  test("fetches single InvStockLevel via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("inventory");
  });

  test("lists InvStockLevel entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
