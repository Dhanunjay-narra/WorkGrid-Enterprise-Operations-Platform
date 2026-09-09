import { FinCostCenterRpcServer } from "../../../services/core-engine/src/finance/rpc/servers/FinCostCenterRpcServer";
import { FinCostCenterFormValidator } from "../../../packages/types/src/forms/finance/FinCostCenterFormSchema";

describe("FinCostCenter System Level Integration Test", () => {
  const server = new FinCostCenterRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = FinCostCenterFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
