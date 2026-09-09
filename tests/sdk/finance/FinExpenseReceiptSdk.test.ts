import { FinExpenseReceiptClient } from "../../../packages/sdk/src/clients/finance/FinExpenseReceiptClient";

describe("FinExpenseReceipt SDK Client Integration Matrix", () => {
  const client = new FinExpenseReceiptClient("test-api-key");

  test("fetches single FinExpenseReceipt via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("finance");
  });

  test("lists FinExpenseReceipt entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
