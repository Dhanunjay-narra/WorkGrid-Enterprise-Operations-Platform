import { AiConfidenceScorecardRpcServer } from "../../../services/core-engine/src/ai/rpc/servers/AiConfidenceScorecardRpcServer";
import { AiConfidenceScorecardFormValidator } from "../../../packages/types/src/forms/ai/AiConfidenceScorecardFormSchema";

describe("AiConfidenceScorecard System Level Integration Test", () => {
  const server = new AiConfidenceScorecardRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = AiConfidenceScorecardFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
