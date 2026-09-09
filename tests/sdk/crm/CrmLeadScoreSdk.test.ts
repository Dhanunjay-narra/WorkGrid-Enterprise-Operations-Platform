import { CrmLeadScoreClient } from "../../../packages/sdk/src/clients/crm/CrmLeadScoreClient";

describe("CrmLeadScore SDK Client Integration Matrix", () => {
  const client = new CrmLeadScoreClient("test-api-key");

  test("fetches single CrmLeadScore via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("crm");
  });

  test("lists CrmLeadScore entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
