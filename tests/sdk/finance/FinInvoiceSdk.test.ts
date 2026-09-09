import { FinInvoiceClient } from "../../../packages/sdk/src/clients/finance/FinInvoiceClient";

describe("FinInvoice SDK Client Integration Matrix", () => {
  const client = new FinInvoiceClient("test-api-key");

  test("fetches single FinInvoice via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("finance");
  });

  test("lists FinInvoice entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
