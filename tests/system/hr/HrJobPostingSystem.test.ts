import { HrJobPostingRpcServer } from "../../../services/core-engine/src/hr/rpc/servers/HrJobPostingRpcServer";
import { HrJobPostingFormValidator } from "../../../packages/types/src/forms/hr/HrJobPostingFormSchema";

describe("HrJobPosting System Level Integration Test", () => {
  const server = new HrJobPostingRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = HrJobPostingFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
