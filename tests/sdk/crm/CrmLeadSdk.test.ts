import { CrmLeadClient } from "../../../packages/sdk/src/clients/crm/CrmLeadClient";

describe("CrmLead SDK Client Integration Matrix", () => {
  const client = new CrmLeadClient("test-api-key");

  test("fetches single CrmLead via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("crm");
  });

  test("lists CrmLead entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
