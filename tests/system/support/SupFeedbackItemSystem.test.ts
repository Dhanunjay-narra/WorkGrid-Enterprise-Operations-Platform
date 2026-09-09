import { SupFeedbackItemRpcServer } from "../../../services/core-engine/src/support/rpc/servers/SupFeedbackItemRpcServer";
import { SupFeedbackItemFormValidator } from "../../../packages/types/src/forms/support/SupFeedbackItemFormSchema";

describe("SupFeedbackItem System Level Integration Test", () => {
  const server = new SupFeedbackItemRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = SupFeedbackItemFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
