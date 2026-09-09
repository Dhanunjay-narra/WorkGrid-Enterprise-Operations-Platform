import { FinBankReconciliationClient } from "../../../packages/sdk/src/clients/finance/FinBankReconciliationClient";

describe("FinBankReconciliation SDK Client Integration Matrix", () => {
  const client = new FinBankReconciliationClient("test-api-key");

  test("fetches single FinBankReconciliation via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("finance");
  });

  test("lists FinBankReconciliation entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
