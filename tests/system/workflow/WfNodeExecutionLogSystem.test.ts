import { WfNodeExecutionLogRpcServer } from "../../../services/core-engine/src/workflow/rpc/servers/WfNodeExecutionLogRpcServer";
import { WfNodeExecutionLogFormValidator } from "../../../packages/types/src/forms/workflow/WfNodeExecutionLogFormSchema";

describe("WfNodeExecutionLog System Level Integration Test", () => {
  const server = new WfNodeExecutionLogRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = WfNodeExecutionLogFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
