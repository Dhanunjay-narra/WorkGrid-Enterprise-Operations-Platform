import { CrmDealClient } from "../../../packages/sdk/src/clients/crm/CrmDealClient";

describe("CrmDeal SDK Client Integration Matrix", () => {
  const client = new CrmDealClient("test-api-key");

  test("fetches single CrmDeal via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("crm");
  });

  test("lists CrmDeal entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
