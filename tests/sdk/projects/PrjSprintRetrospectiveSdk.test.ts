import { PrjSprintRetrospectiveClient } from "../../../packages/sdk/src/clients/projects/PrjSprintRetrospectiveClient";

describe("PrjSprintRetrospective SDK Client Integration Matrix", () => {
  const client = new PrjSprintRetrospectiveClient("test-api-key");

  test("fetches single PrjSprintRetrospective via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("projects");
  });

  test("lists PrjSprintRetrospective entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
