import { CrmTerritoryClient } from "../../../packages/sdk/src/clients/crm/CrmTerritoryClient";

describe("CrmTerritory SDK Client Integration Matrix", () => {
  const client = new CrmTerritoryClient("test-api-key");

  test("fetches single CrmTerritory via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("crm");
  });

  test("lists CrmTerritory entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
