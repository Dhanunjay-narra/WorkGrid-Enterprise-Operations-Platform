import { WfApprovalDecisionRpcServer } from "../../../services/core-engine/src/workflow/rpc/servers/WfApprovalDecisionRpcServer";
import { WfApprovalDecisionFormValidator } from "../../../packages/types/src/forms/workflow/WfApprovalDecisionFormSchema";

describe("WfApprovalDecision System Level Integration Test", () => {
  const server = new WfApprovalDecisionRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = WfApprovalDecisionFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
