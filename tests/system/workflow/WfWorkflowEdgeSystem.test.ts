import { WfWorkflowEdgeRpcServer } from "../../../services/core-engine/src/workflow/rpc/servers/WfWorkflowEdgeRpcServer";
import { WfWorkflowEdgeFormValidator } from "../../../packages/types/src/forms/workflow/WfWorkflowEdgeFormSchema";

describe("WfWorkflowEdge System Level Integration Test", () => {
  const server = new WfWorkflowEdgeRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = WfWorkflowEdgeFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
