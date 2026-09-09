import { HrOkrGoalClient } from "../../../packages/sdk/src/clients/hr/HrOkrGoalClient";

describe("HrOkrGoal SDK Client Integration Matrix", () => {
  const client = new HrOkrGoalClient("test-api-key");

  test("fetches single HrOkrGoal via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("hr");
  });

  test("lists HrOkrGoal entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
