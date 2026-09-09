import { PrjSubtaskClient } from "../../../packages/sdk/src/clients/projects/PrjSubtaskClient";

describe("PrjSubtask SDK Client Integration Matrix", () => {
  const client = new PrjSubtaskClient("test-api-key");

  test("fetches single PrjSubtask via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("projects");
  });

  test("lists PrjSubtask entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
