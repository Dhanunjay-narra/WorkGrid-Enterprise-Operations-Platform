import { FinFxRateHistoryClient } from "../../../packages/sdk/src/clients/finance/FinFxRateHistoryClient";

describe("FinFxRateHistory SDK Client Integration Matrix", () => {
  const client = new FinFxRateHistoryClient("test-api-key");

  test("fetches single FinFxRateHistory via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("finance");
  });

  test("lists FinFxRateHistory entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
