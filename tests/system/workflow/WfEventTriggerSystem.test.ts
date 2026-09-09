import { WfEventTriggerRpcServer } from "../../../services/core-engine/src/workflow/rpc/servers/WfEventTriggerRpcServer";
import { WfEventTriggerFormValidator } from "../../../packages/types/src/forms/workflow/WfEventTriggerFormSchema";

describe("WfEventTrigger System Level Integration Test", () => {
  const server = new WfEventTriggerRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = WfEventTriggerFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
