import { WfApprovalTaskRpcServer } from "../../../services/core-engine/src/workflow/rpc/servers/WfApprovalTaskRpcServer";
import { WfApprovalTaskFormValidator } from "../../../packages/types/src/forms/workflow/WfApprovalTaskFormSchema";

describe("WfApprovalTask System Level Integration Test", () => {
  const server = new WfApprovalTaskRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = WfApprovalTaskFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
