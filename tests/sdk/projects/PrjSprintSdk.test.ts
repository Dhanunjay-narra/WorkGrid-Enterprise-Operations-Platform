import { PrjSprintClient } from "../../../packages/sdk/src/clients/projects/PrjSprintClient";

describe("PrjSprint SDK Client Integration Matrix", () => {
  const client = new PrjSprintClient("test-api-key");

  test("fetches single PrjSprint via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("projects");
  });

  test("lists PrjSprint entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
