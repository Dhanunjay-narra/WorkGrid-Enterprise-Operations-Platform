import { PrjRiskItemRpcServer } from "../../../services/core-engine/src/projects/rpc/servers/PrjRiskItemRpcServer";
import { PrjRiskItemFormValidator } from "../../../packages/types/src/forms/projects/PrjRiskItemFormSchema";

describe("PrjRiskItem System Level Integration Test", () => {
  const server = new PrjRiskItemRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = PrjRiskItemFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
