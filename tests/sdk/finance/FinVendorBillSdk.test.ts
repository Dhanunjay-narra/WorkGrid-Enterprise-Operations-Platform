import { FinVendorBillClient } from "../../../packages/sdk/src/clients/finance/FinVendorBillClient";

describe("FinVendorBill SDK Client Integration Matrix", () => {
  const client = new FinVendorBillClient("test-api-key");

  test("fetches single FinVendorBill via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("finance");
  });

  test("lists FinVendorBill entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
