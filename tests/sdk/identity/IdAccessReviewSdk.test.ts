import { IdAccessReviewClient } from "../../../packages/sdk/src/clients/identity/IdAccessReviewClient";

describe("IdAccessReview SDK Client Integration Matrix", () => {
  const client = new IdAccessReviewClient("test-api-key");

  test("fetches single IdAccessReview via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("identity");
  });

  test("lists IdAccessReview entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
