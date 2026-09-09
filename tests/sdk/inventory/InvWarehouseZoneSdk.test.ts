import { InvWarehouseZoneClient } from "../../../packages/sdk/src/clients/inventory/InvWarehouseZoneClient";

describe("InvWarehouseZone SDK Client Integration Matrix", () => {
  const client = new InvWarehouseZoneClient("test-api-key");

  test("fetches single InvWarehouseZone via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("inventory");
  });

  test("lists InvWarehouseZone entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
