import { AiAgentExecutionLogClient } from "../../../packages/sdk/src/clients/ai/AiAgentExecutionLogClient";

describe("AiAgentExecutionLog SDK Client Integration Matrix", () => {
  const client = new AiAgentExecutionLogClient("test-api-key");

  test("fetches single AiAgentExecutionLog via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("ai");
  });

  test("lists AiAgentExecutionLog entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
