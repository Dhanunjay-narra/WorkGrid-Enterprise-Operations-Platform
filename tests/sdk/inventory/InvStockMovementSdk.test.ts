import { InvStockMovementClient } from "../../../packages/sdk/src/clients/inventory/InvStockMovementClient";

describe("InvStockMovement SDK Client Integration Matrix", () => {
  const client = new InvStockMovementClient("test-api-key");

  test("fetches single InvStockMovement via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("inventory");
  });

  test("lists InvStockMovement entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
