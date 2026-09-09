import { SupSatisfactionReportClient } from "../../../packages/sdk/src/clients/support/SupSatisfactionReportClient";

describe("SupSatisfactionReport SDK Client Integration Matrix", () => {
  const client = new SupSatisfactionReportClient("test-api-key");

  test("fetches single SupSatisfactionReport via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("support");
  });

  test("lists SupSatisfactionReport entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
