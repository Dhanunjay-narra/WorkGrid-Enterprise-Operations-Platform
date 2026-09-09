import { BiReportQueryRpcServer } from "../../../services/core-engine/src/analytics/rpc/servers/BiReportQueryRpcServer";
import { BiReportQueryFormValidator } from "../../../packages/types/src/forms/analytics/BiReportQueryFormSchema";

describe("BiReportQuery System Level Integration Test", () => {
  const server = new BiReportQueryRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = BiReportQueryFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
