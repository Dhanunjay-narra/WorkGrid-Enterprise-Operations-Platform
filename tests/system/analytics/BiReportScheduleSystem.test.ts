import { BiReportScheduleRpcServer } from "../../../services/core-engine/src/analytics/rpc/servers/BiReportScheduleRpcServer";
import { BiReportScheduleFormValidator } from "../../../packages/types/src/forms/analytics/BiReportScheduleFormSchema";

describe("BiReportSchedule System Level Integration Test", () => {
  const server = new BiReportScheduleRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = BiReportScheduleFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
