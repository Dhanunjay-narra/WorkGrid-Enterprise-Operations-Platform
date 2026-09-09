import { InvSupplierScorecardRpcServer } from "../../../services/core-engine/src/inventory/rpc/servers/InvSupplierScorecardRpcServer";
import { InvSupplierScorecardFormValidator } from "../../../packages/types/src/forms/inventory/InvSupplierScorecardFormSchema";

describe("InvSupplierScorecard System Level Integration Test", () => {
  const server = new InvSupplierScorecardRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = InvSupplierScorecardFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
