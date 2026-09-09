import { HrDepartmentRpcServer } from "../../../services/core-engine/src/hr/rpc/servers/HrDepartmentRpcServer";
import { HrDepartmentFormValidator } from "../../../packages/types/src/forms/hr/HrDepartmentFormSchema";

describe("HrDepartment System Level Integration Test", () => {
  const server = new HrDepartmentRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = HrDepartmentFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
