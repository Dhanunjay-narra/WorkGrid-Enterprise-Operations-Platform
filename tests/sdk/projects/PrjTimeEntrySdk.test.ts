import { PrjTimeEntryClient } from "../../../packages/sdk/src/clients/projects/PrjTimeEntryClient";

describe("PrjTimeEntry SDK Client Integration Matrix", () => {
  const client = new PrjTimeEntryClient("test-api-key");

  test("fetches single PrjTimeEntry via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("projects");
  });

  test("lists PrjTimeEntry entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
