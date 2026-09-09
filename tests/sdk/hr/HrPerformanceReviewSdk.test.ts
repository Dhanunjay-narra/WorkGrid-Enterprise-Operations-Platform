import { HrPerformanceReviewClient } from "../../../packages/sdk/src/clients/hr/HrPerformanceReviewClient";

describe("HrPerformanceReview SDK Client Integration Matrix", () => {
  const client = new HrPerformanceReviewClient("test-api-key");

  test("fetches single HrPerformanceReview via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("hr");
  });

  test("lists HrPerformanceReview entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
