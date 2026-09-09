import { PrjReleasePlanClient } from "../../../packages/sdk/src/clients/projects/PrjReleasePlanClient";

describe("PrjReleasePlan SDK Client Integration Matrix", () => {
  const client = new PrjReleasePlanClient("test-api-key");

  test("fetches single PrjReleasePlan via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("projects");
  });

  test("lists PrjReleasePlan entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
