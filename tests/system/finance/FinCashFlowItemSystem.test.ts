import { FinCashFlowItemRpcServer } from "../../../services/core-engine/src/finance/rpc/servers/FinCashFlowItemRpcServer";
import { FinCashFlowItemFormValidator } from "../../../packages/types/src/forms/finance/FinCashFlowItemFormSchema";

describe("FinCashFlowItem System Level Integration Test", () => {
  const server = new FinCashFlowItemRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = FinCashFlowItemFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
