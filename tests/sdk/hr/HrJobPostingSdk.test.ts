import { HrJobPostingClient } from "../../../packages/sdk/src/clients/hr/HrJobPostingClient";

describe("HrJobPosting SDK Client Integration Matrix", () => {
  const client = new HrJobPostingClient("test-api-key");

  test("fetches single HrJobPosting via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("hr");
  });

  test("lists HrJobPosting entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
