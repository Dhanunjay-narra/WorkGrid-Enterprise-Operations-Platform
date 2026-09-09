import { FinTaxRateClient } from "../../../packages/sdk/src/clients/finance/FinTaxRateClient";

describe("FinTaxRate SDK Client Integration Matrix", () => {
  const client = new FinTaxRateClient("test-api-key");

  test("fetches single FinTaxRate via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("finance");
  });

  test("lists FinTaxRate entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
