import { IdAccessReviewRpcServer } from "../../../services/core-engine/src/identity/rpc/servers/IdAccessReviewRpcServer";
import { IdAccessReviewFormValidator } from "../../../packages/types/src/forms/identity/IdAccessReviewFormSchema";

describe("IdAccessReview System Level Integration Test", () => {
  const server = new IdAccessReviewRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IdAccessReviewFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
