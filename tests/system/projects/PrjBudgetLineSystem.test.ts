import { PrjBudgetLineRpcServer } from "../../../services/core-engine/src/projects/rpc/servers/PrjBudgetLineRpcServer";
import { PrjBudgetLineFormValidator } from "../../../packages/types/src/forms/projects/PrjBudgetLineFormSchema";

describe("PrjBudgetLine System Level Integration Test", () => {
  const server = new PrjBudgetLineRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = PrjBudgetLineFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
