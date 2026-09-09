import { FinPaymentTransactionClient } from "../../../packages/sdk/src/clients/finance/FinPaymentTransactionClient";

describe("FinPaymentTransaction SDK Client Integration Matrix", () => {
  const client = new FinPaymentTransactionClient("test-api-key");

  test("fetches single FinPaymentTransaction via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("finance");
  });

  test("lists FinPaymentTransaction entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
