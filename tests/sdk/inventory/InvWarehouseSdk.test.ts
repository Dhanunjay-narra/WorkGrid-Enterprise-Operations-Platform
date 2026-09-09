import { InvWarehouseClient } from "../../../packages/sdk/src/clients/inventory/InvWarehouseClient";

describe("InvWarehouse SDK Client Integration Matrix", () => {
  const client = new InvWarehouseClient("test-api-key");

  test("fetches single InvWarehouse via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("inventory");
  });

  test("lists InvWarehouse entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
