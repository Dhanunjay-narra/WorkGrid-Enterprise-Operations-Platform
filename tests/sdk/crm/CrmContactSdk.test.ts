import { CrmContactClient } from "../../../packages/sdk/src/clients/crm/CrmContactClient";

describe("CrmContact SDK Client Integration Matrix", () => {
  const client = new CrmContactClient("test-api-key");

  test("fetches single CrmContact via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("crm");
  });

  test("lists CrmContact entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
