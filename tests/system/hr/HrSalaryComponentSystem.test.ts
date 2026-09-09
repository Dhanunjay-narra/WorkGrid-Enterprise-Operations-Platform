import { HrSalaryComponentRpcServer } from "../../../services/core-engine/src/hr/rpc/servers/HrSalaryComponentRpcServer";
import { HrSalaryComponentFormValidator } from "../../../packages/types/src/forms/hr/HrSalaryComponentFormSchema";

describe("HrSalaryComponent System Level Integration Test", () => {
  const server = new HrSalaryComponentRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = HrSalaryComponentFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
