import { PrjGanttDependencyClient } from "../../../packages/sdk/src/clients/projects/PrjGanttDependencyClient";

describe("PrjGanttDependency SDK Client Integration Matrix", () => {
  const client = new PrjGanttDependencyClient("test-api-key");

  test("fetches single PrjGanttDependency via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("projects");
  });

  test("lists PrjGanttDependency entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
