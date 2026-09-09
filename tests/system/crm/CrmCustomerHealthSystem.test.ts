import { CrmCustomerHealthRpcServer } from "../../../services/core-engine/src/crm/rpc/servers/CrmCustomerHealthRpcServer";
import { CrmCustomerHealthFormValidator } from "../../../packages/types/src/forms/crm/CrmCustomerHealthFormSchema";

describe("CrmCustomerHealth System Level Integration Test", () => {
  const server = new CrmCustomerHealthRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = CrmCustomerHealthFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
