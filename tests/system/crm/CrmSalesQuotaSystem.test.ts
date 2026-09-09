import { CrmSalesQuotaRpcServer } from "../../../services/core-engine/src/crm/rpc/servers/CrmSalesQuotaRpcServer";
import { CrmSalesQuotaFormValidator } from "../../../packages/types/src/forms/crm/CrmSalesQuotaFormSchema";

describe("CrmSalesQuota System Level Integration Test", () => {
  const server = new CrmSalesQuotaRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = CrmSalesQuotaFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
