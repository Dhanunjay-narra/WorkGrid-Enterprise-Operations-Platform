import { AiAgentConversationSessionClient } from "../../../packages/sdk/src/clients/ai/AiAgentConversationSessionClient";

describe("AiAgentConversationSession SDK Client Integration Matrix", () => {
  const client = new AiAgentConversationSessionClient("test-api-key");

  test("fetches single AiAgentConversationSession via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("ai");
  });

  test("lists AiAgentConversationSession entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
