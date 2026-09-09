import { AiAgentExecutionLogRpcServer } from "../../../services/core-engine/src/ai/rpc/servers/AiAgentExecutionLogRpcServer";
import { AiAgentExecutionLogFormValidator } from "../../../packages/types/src/forms/ai/AiAgentExecutionLogFormSchema";

describe("AiAgentExecutionLog System Level Integration Test", () => {
  const server = new AiAgentExecutionLogRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = AiAgentExecutionLogFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
