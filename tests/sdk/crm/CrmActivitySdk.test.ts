import { CrmActivityClient } from "../../../packages/sdk/src/clients/crm/CrmActivityClient";

describe("CrmActivity SDK Client Integration Matrix", () => {
  const client = new CrmActivityClient("test-api-key");

  test("fetches single CrmActivity via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("crm");
  });

  test("lists CrmActivity entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
