import { BiCohortGroupClient } from "../../../packages/sdk/src/clients/analytics/BiCohortGroupClient";

describe("BiCohortGroup SDK Client Integration Matrix", () => {
  const client = new BiCohortGroupClient("test-api-key");

  test("fetches single BiCohortGroup via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("analytics");
  });

  test("lists BiCohortGroup entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
