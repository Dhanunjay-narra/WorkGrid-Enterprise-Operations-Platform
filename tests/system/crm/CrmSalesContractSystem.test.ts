import { CrmSalesContractRpcServer } from "../../../services/core-engine/src/crm/rpc/servers/CrmSalesContractRpcServer";
import { CrmSalesContractFormValidator } from "../../../packages/types/src/forms/crm/CrmSalesContractFormSchema";

describe("CrmSalesContract System Level Integration Test", () => {
  const server = new CrmSalesContractRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = CrmSalesContractFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
