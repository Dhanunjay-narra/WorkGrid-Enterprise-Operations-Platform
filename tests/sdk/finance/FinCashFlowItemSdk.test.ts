import { FinCashFlowItemClient } from "../../../packages/sdk/src/clients/finance/FinCashFlowItemClient";

describe("FinCashFlowItem SDK Client Integration Matrix", () => {
  const client = new FinCashFlowItemClient("test-api-key");

  test("fetches single FinCashFlowItem via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("finance");
  });

  test("lists FinCashFlowItem entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
