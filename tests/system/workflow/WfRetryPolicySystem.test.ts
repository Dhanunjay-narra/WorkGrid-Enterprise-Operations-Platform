import { WfRetryPolicyRpcServer } from "../../../services/core-engine/src/workflow/rpc/servers/WfRetryPolicyRpcServer";
import { WfRetryPolicyFormValidator } from "../../../packages/types/src/forms/workflow/WfRetryPolicyFormSchema";

describe("WfRetryPolicy System Level Integration Test", () => {
  const server = new WfRetryPolicyRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = WfRetryPolicyFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
