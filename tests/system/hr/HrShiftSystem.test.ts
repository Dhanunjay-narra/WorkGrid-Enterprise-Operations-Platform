import { HrShiftRpcServer } from "../../../services/core-engine/src/hr/rpc/servers/HrShiftRpcServer";
import { HrShiftFormValidator } from "../../../packages/types/src/forms/hr/HrShiftFormSchema";

describe("HrShift System Level Integration Test", () => {
  const server = new HrShiftRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = HrShiftFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
