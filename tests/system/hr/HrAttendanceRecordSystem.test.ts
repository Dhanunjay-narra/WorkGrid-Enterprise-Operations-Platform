import { HrAttendanceRecordRpcServer } from "../../../services/core-engine/src/hr/rpc/servers/HrAttendanceRecordRpcServer";
import { HrAttendanceRecordFormValidator } from "../../../packages/types/src/forms/hr/HrAttendanceRecordFormSchema";

describe("HrAttendanceRecord System Level Integration Test", () => {
  const server = new HrAttendanceRecordRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = HrAttendanceRecordFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
