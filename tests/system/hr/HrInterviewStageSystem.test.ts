import { HrInterviewStageRpcServer } from "../../../services/core-engine/src/hr/rpc/servers/HrInterviewStageRpcServer";
import { HrInterviewStageFormValidator } from "../../../packages/types/src/forms/hr/HrInterviewStageFormSchema";

describe("HrInterviewStage System Level Integration Test", () => {
  const server = new HrInterviewStageRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = HrInterviewStageFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
