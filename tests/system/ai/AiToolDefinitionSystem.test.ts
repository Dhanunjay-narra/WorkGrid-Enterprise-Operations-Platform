import { AiToolDefinitionRpcServer } from "../../../services/core-engine/src/ai/rpc/servers/AiToolDefinitionRpcServer";
import { AiToolDefinitionFormValidator } from "../../../packages/types/src/forms/ai/AiToolDefinitionFormSchema";

describe("AiToolDefinition System Level Integration Test", () => {
  const server = new AiToolDefinitionRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = AiToolDefinitionFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
