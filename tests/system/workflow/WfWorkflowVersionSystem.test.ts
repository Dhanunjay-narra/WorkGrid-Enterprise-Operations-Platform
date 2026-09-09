import { WfWorkflowVersionRpcServer } from "../../../services/core-engine/src/workflow/rpc/servers/WfWorkflowVersionRpcServer";
import { WfWorkflowVersionFormValidator } from "../../../packages/types/src/forms/workflow/WfWorkflowVersionFormSchema";

describe("WfWorkflowVersion System Level Integration Test", () => {
  const server = new WfWorkflowVersionRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = WfWorkflowVersionFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
