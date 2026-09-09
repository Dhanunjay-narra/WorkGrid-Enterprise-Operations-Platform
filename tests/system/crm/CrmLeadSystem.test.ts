import { CrmLeadRpcServer } from "../../../services/core-engine/src/crm/rpc/servers/CrmLeadRpcServer";
import { CrmLeadFormValidator } from "../../../packages/types/src/forms/crm/CrmLeadFormSchema";

describe("CrmLead System Level Integration Test", () => {
  const server = new CrmLeadRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = CrmLeadFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
