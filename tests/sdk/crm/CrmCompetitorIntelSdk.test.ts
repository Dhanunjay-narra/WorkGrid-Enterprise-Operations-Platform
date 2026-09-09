import { CrmCompetitorIntelClient } from "../../../packages/sdk/src/clients/crm/CrmCompetitorIntelClient";

describe("CrmCompetitorIntel SDK Client Integration Matrix", () => {
  const client = new CrmCompetitorIntelClient("test-api-key");

  test("fetches single CrmCompetitorIntel via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("crm");
  });

  test("lists CrmCompetitorIntel entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
