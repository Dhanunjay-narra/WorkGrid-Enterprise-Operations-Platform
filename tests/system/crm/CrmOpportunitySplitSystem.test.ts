import { CrmOpportunitySplitRpcServer } from "../../../services/core-engine/src/crm/rpc/servers/CrmOpportunitySplitRpcServer";
import { CrmOpportunitySplitFormValidator } from "../../../packages/types/src/forms/crm/CrmOpportunitySplitFormSchema";

describe("CrmOpportunitySplit System Level Integration Test", () => {
  const server = new CrmOpportunitySplitRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = CrmOpportunitySplitFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
