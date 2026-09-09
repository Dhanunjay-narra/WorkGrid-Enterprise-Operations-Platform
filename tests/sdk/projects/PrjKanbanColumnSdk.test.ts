import { PrjKanbanColumnClient } from "../../../packages/sdk/src/clients/projects/PrjKanbanColumnClient";

describe("PrjKanbanColumn SDK Client Integration Matrix", () => {
  const client = new PrjKanbanColumnClient("test-api-key");

  test("fetches single PrjKanbanColumn via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("projects");
  });

  test("lists PrjKanbanColumn entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
