import { InvItemCategoryClient } from "../../../packages/sdk/src/clients/inventory/InvItemCategoryClient";

describe("InvItemCategory SDK Client Integration Matrix", () => {
  const client = new InvItemCategoryClient("test-api-key");

  test("fetches single InvItemCategory via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("inventory");
  });

  test("lists InvItemCategory entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
