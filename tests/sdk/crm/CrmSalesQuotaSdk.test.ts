import { CrmSalesQuotaClient } from "../../../packages/sdk/src/clients/crm/CrmSalesQuotaClient";

describe("CrmSalesQuota SDK Client Integration Matrix", () => {
  const client = new CrmSalesQuotaClient("test-api-key");

  test("fetches single CrmSalesQuota via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("crm");
  });

  test("lists CrmSalesQuota entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
