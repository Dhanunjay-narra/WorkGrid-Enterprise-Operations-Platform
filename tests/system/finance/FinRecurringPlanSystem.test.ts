import { FinRecurringPlanRpcServer } from "../../../services/core-engine/src/finance/rpc/servers/FinRecurringPlanRpcServer";
import { FinRecurringPlanFormValidator } from "../../../packages/types/src/forms/finance/FinRecurringPlanFormSchema";

describe("FinRecurringPlan System Level Integration Test", () => {
  const server = new FinRecurringPlanRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = FinRecurringPlanFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
