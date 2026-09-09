import { SupCustomerSurveyRpcServer } from "../../../services/core-engine/src/support/rpc/servers/SupCustomerSurveyRpcServer";
import { SupCustomerSurveyFormValidator } from "../../../packages/types/src/forms/support/SupCustomerSurveyFormSchema";

describe("SupCustomerSurvey System Level Integration Test", () => {
  const server = new SupCustomerSurveyRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = SupCustomerSurveyFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
