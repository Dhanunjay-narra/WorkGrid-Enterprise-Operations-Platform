import { CrmCallLogClient } from "../../../packages/sdk/src/clients/crm/CrmCallLogClient";

describe("CrmCallLog SDK Client Integration Matrix", () => {
  const client = new CrmCallLogClient("test-api-key");

  test("fetches single CrmCallLog via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("crm");
  });

  test("lists CrmCallLog entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
