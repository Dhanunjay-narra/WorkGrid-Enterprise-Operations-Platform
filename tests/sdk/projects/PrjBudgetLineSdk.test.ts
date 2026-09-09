import { PrjBudgetLineClient } from "../../../packages/sdk/src/clients/projects/PrjBudgetLineClient";

describe("PrjBudgetLine SDK Client Integration Matrix", () => {
  const client = new PrjBudgetLineClient("test-api-key");

  test("fetches single PrjBudgetLine via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("projects");
  });

  test("lists PrjBudgetLine entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
