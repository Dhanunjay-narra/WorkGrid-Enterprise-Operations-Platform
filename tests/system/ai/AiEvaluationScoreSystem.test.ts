import { AiEvaluationScoreRpcServer } from "../../../services/core-engine/src/ai/rpc/servers/AiEvaluationScoreRpcServer";
import { AiEvaluationScoreFormValidator } from "../../../packages/types/src/forms/ai/AiEvaluationScoreFormSchema";

describe("AiEvaluationScore System Level Integration Test", () => {
  const server = new AiEvaluationScoreRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = AiEvaluationScoreFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
