import { PrjWorkspaceClient } from "../../../packages/sdk/src/clients/projects/PrjWorkspaceClient";

describe("PrjWorkspace SDK Client Integration Matrix", () => {
  const client = new PrjWorkspaceClient("test-api-key");

  test("fetches single PrjWorkspace via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("projects");
  });

  test("lists PrjWorkspace entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
