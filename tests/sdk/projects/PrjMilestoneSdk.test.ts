import { PrjMilestoneClient } from "../../../packages/sdk/src/clients/projects/PrjMilestoneClient";

describe("PrjMilestone SDK Client Integration Matrix", () => {
  const client = new PrjMilestoneClient("test-api-key");

  test("fetches single PrjMilestone via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("projects");
  });

  test("lists PrjMilestone entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
