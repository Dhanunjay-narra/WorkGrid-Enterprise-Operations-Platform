import { IdAuditTrailClient } from "../../../packages/sdk/src/clients/identity/IdAuditTrailClient";

describe("IdAuditTrail SDK Client Integration Matrix", () => {
  const client = new IdAuditTrailClient("test-api-key");

  test("fetches single IdAuditTrail via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("identity");
  });

  test("lists IdAuditTrail entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
