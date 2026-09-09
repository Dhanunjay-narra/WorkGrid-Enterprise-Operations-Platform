import { InvTransferOrderClient } from "../../../packages/sdk/src/clients/inventory/InvTransferOrderClient";

describe("InvTransferOrder SDK Client Integration Matrix", () => {
  const client = new InvTransferOrderClient("test-api-key");

  test("fetches single InvTransferOrder via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("inventory");
  });

  test("lists InvTransferOrder entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
