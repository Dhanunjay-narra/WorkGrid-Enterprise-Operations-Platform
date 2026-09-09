import { InvSupplierScorecardClient } from "../../../packages/sdk/src/clients/inventory/InvSupplierScorecardClient";

describe("InvSupplierScorecard SDK Client Integration Matrix", () => {
  const client = new InvSupplierScorecardClient("test-api-key");

  test("fetches single InvSupplierScorecard via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("inventory");
  });

  test("lists InvSupplierScorecard entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
