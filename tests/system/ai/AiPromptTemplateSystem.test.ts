import { AiPromptTemplateRpcServer } from "../../../services/core-engine/src/ai/rpc/servers/AiPromptTemplateRpcServer";
import { AiPromptTemplateFormValidator } from "../../../packages/types/src/forms/ai/AiPromptTemplateFormSchema";

describe("AiPromptTemplate System Level Integration Test", () => {
  const server = new AiPromptTemplateRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = AiPromptTemplateFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
