import { WfWorkflowExecutionRpcServer } from "../../../services/core-engine/src/workflow/rpc/servers/WfWorkflowExecutionRpcServer";
import { WfWorkflowExecutionFormValidator } from "../../../packages/types/src/forms/workflow/WfWorkflowExecutionFormSchema";

describe("WfWorkflowExecution System Level Integration Test", () => {
  const server = new WfWorkflowExecutionRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = WfWorkflowExecutionFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
