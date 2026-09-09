import { HrLeavePolicyRpcServer } from "../../../services/core-engine/src/hr/rpc/servers/HrLeavePolicyRpcServer";
import { HrLeavePolicyFormValidator } from "../../../packages/types/src/forms/hr/HrLeavePolicyFormSchema";

describe("HrLeavePolicy System Level Integration Test", () => {
  const server = new HrLeavePolicyRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = HrLeavePolicyFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
