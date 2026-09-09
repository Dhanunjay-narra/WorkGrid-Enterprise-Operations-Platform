import { AiConfidenceScorecardClient } from "../../../packages/sdk/src/clients/ai/AiConfidenceScorecardClient";

describe("AiConfidenceScorecard SDK Client Integration Matrix", () => {
  const client = new AiConfidenceScorecardClient("test-api-key");

  test("fetches single AiConfidenceScorecard via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("ai");
  });

  test("lists AiConfidenceScorecard entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
