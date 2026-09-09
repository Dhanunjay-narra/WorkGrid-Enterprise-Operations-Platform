import { WfVariableStoreRpcServer } from "../../../services/core-engine/src/workflow/rpc/servers/WfVariableStoreRpcServer";
import { WfVariableStoreFormValidator } from "../../../packages/types/src/forms/workflow/WfVariableStoreFormSchema";

describe("WfVariableStore System Level Integration Test", () => {
  const server = new WfVariableStoreRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = WfVariableStoreFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
