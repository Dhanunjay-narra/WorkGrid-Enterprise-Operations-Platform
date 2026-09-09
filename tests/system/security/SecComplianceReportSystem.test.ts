import { SecComplianceReportRpcServer } from "../../../services/core-engine/src/security/rpc/servers/SecComplianceReportRpcServer";
import { SecComplianceReportFormValidator } from "../../../packages/types/src/forms/security/SecComplianceReportFormSchema";

describe("SecComplianceReport System Level Integration Test", () => {
  const server = new SecComplianceReportRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = SecComplianceReportFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
