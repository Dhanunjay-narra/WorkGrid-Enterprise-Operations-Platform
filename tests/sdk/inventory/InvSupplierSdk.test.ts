import { InvSupplierClient } from "../../../packages/sdk/src/clients/inventory/InvSupplierClient";

describe("InvSupplier SDK Client Integration Matrix", () => {
  const client = new InvSupplierClient("test-api-key");

  test("fetches single InvSupplier via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("inventory");
  });

  test("lists InvSupplier entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
