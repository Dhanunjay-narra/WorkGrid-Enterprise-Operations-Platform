import { AiEvaluationScoreClient } from "../../../packages/sdk/src/clients/ai/AiEvaluationScoreClient";

describe("AiEvaluationScore SDK Client Integration Matrix", () => {
  const client = new AiEvaluationScoreClient("test-api-key");

  test("fetches single AiEvaluationScore via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("ai");
  });

  test("lists AiEvaluationScore entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
