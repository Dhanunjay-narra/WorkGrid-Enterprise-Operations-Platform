import { HrCandidateClient } from "../../../packages/sdk/src/clients/hr/HrCandidateClient";

describe("HrCandidate SDK Client Integration Matrix", () => {
  const client = new HrCandidateClient("test-api-key");

  test("fetches single HrCandidate via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("hr");
  });

  test("lists HrCandidate entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
