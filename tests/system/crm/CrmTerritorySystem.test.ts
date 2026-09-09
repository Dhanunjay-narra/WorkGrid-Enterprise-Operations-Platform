import { CrmTerritoryRpcServer } from "../../../services/core-engine/src/crm/rpc/servers/CrmTerritoryRpcServer";
import { CrmTerritoryFormValidator } from "../../../packages/types/src/forms/crm/CrmTerritoryFormSchema";

describe("CrmTerritory System Level Integration Test", () => {
  const server = new CrmTerritoryRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = CrmTerritoryFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
