import { FinInvoiceItemClient } from "../../../packages/sdk/src/clients/finance/FinInvoiceItemClient";

describe("FinInvoiceItem SDK Client Integration Matrix", () => {
  const client = new FinInvoiceItemClient("test-api-key");

  test("fetches single FinInvoiceItem via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("finance");
  });

  test("lists FinInvoiceItem entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
