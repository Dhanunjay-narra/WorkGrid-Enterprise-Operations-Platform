import { HrEmployeeRpcServer } from "../../../services/core-engine/src/hr/rpc/servers/HrEmployeeRpcServer";
import { HrEmployeeFormValidator } from "../../../packages/types/src/forms/hr/HrEmployeeFormSchema";

describe("HrEmployee System Level Integration Test", () => {
  const server = new HrEmployeeRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = HrEmployeeFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
