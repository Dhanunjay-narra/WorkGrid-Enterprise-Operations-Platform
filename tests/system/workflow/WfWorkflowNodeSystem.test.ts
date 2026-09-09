import { WfWorkflowNodeRpcServer } from "../../../services/core-engine/src/workflow/rpc/servers/WfWorkflowNodeRpcServer";
import { WfWorkflowNodeFormValidator } from "../../../packages/types/src/forms/workflow/WfWorkflowNodeFormSchema";

describe("WfWorkflowNode System Level Integration Test", () => {
  const server = new WfWorkflowNodeRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = WfWorkflowNodeFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
