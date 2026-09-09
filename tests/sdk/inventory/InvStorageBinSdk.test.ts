import { InvStorageBinClient } from "../../../packages/sdk/src/clients/inventory/InvStorageBinClient";

describe("InvStorageBin SDK Client Integration Matrix", () => {
  const client = new InvStorageBinClient("test-api-key");

  test("fetches single InvStorageBin via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("inventory");
  });

  test("lists InvStorageBin entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
