import { AiAgentConversationSessionRpcServer } from "../../../services/core-engine/src/ai/rpc/servers/AiAgentConversationSessionRpcServer";
import { AiAgentConversationSessionFormValidator } from "../../../packages/types/src/forms/ai/AiAgentConversationSessionFormSchema";

describe("AiAgentConversationSession System Level Integration Test", () => {
  const server = new AiAgentConversationSessionRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = AiAgentConversationSessionFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
