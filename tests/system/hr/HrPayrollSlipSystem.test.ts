import { HrPayrollSlipRpcServer } from "../../../services/core-engine/src/hr/rpc/servers/HrPayrollSlipRpcServer";
import { HrPayrollSlipFormValidator } from "../../../packages/types/src/forms/hr/HrPayrollSlipFormSchema";

describe("HrPayrollSlip System Level Integration Test", () => {
  const server = new HrPayrollSlipRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = HrPayrollSlipFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
