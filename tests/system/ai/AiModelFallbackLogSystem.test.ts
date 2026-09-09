import { AiModelFallbackLogRpcServer } from "../../../services/core-engine/src/ai/rpc/servers/AiModelFallbackLogRpcServer";
import { AiModelFallbackLogFormValidator } from "../../../packages/types/src/forms/ai/AiModelFallbackLogFormSchema";

describe("AiModelFallbackLog System Level Integration Test", () => {
  const server = new AiModelFallbackLogRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = AiModelFallbackLogFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
