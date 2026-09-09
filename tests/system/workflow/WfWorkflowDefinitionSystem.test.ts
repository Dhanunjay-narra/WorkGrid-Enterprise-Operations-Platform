import { WfWorkflowDefinitionRpcServer } from "../../../services/core-engine/src/workflow/rpc/servers/WfWorkflowDefinitionRpcServer";
import { WfWorkflowDefinitionFormValidator } from "../../../packages/types/src/forms/workflow/WfWorkflowDefinitionFormSchema";

describe("WfWorkflowDefinition System Level Integration Test", () => {
  const server = new WfWorkflowDefinitionRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = WfWorkflowDefinitionFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
