import { CrmNoteClient } from "../../../packages/sdk/src/clients/crm/CrmNoteClient";

describe("CrmNote SDK Client Integration Matrix", () => {
  const client = new CrmNoteClient("test-api-key");

  test("fetches single CrmNote via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("crm");
  });

  test("lists CrmNote entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
