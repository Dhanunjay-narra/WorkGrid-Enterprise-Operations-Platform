import { CrmCompetitorIntelRpcServer } from "../../../services/core-engine/src/crm/rpc/servers/CrmCompetitorIntelRpcServer";
import { CrmCompetitorIntelFormValidator } from "../../../packages/types/src/forms/crm/CrmCompetitorIntelFormSchema";

describe("CrmCompetitorIntel System Level Integration Test", () => {
  const server = new CrmCompetitorIntelRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = CrmCompetitorIntelFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
