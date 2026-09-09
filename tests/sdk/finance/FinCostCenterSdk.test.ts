import { FinCostCenterClient } from "../../../packages/sdk/src/clients/finance/FinCostCenterClient";

describe("FinCostCenter SDK Client Integration Matrix", () => {
  const client = new FinCostCenterClient("test-api-key");

  test("fetches single FinCostCenter via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("finance");
  });

  test("lists FinCostCenter entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
