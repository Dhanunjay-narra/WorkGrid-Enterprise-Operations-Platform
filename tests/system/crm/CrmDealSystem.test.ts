import { CrmDealRpcServer } from "../../../services/core-engine/src/crm/rpc/servers/CrmDealRpcServer";
import { CrmDealFormValidator } from "../../../packages/types/src/forms/crm/CrmDealFormSchema";

describe("CrmDeal System Level Integration Test", () => {
  const server = new CrmDealRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = CrmDealFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
