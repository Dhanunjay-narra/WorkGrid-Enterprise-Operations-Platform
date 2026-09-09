import { FinLedgerAccountClient } from "../../../packages/sdk/src/clients/finance/FinLedgerAccountClient";

describe("FinLedgerAccount SDK Client Integration Matrix", () => {
  const client = new FinLedgerAccountClient("test-api-key");

  test("fetches single FinLedgerAccount via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("finance");
  });

  test("lists FinLedgerAccount entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
