import { FinGeneralLedgerClient } from "../../../packages/sdk/src/clients/finance/FinGeneralLedgerClient";

describe("FinGeneralLedger SDK Client Integration Matrix", () => {
  const client = new FinGeneralLedgerClient("test-api-key");

  test("fetches single FinGeneralLedger via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("finance");
  });

  test("lists FinGeneralLedger entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
