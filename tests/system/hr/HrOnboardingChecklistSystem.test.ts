import { HrOnboardingChecklistRpcServer } from "../../../services/core-engine/src/hr/rpc/servers/HrOnboardingChecklistRpcServer";
import { HrOnboardingChecklistFormValidator } from "../../../packages/types/src/forms/hr/HrOnboardingChecklistFormSchema";

describe("HrOnboardingChecklist System Level Integration Test", () => {
  const server = new HrOnboardingChecklistRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = HrOnboardingChecklistFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
