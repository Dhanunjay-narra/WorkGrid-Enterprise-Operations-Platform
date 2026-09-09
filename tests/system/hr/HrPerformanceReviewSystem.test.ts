import { HrPerformanceReviewRpcServer } from "../../../services/core-engine/src/hr/rpc/servers/HrPerformanceReviewRpcServer";
import { HrPerformanceReviewFormValidator } from "../../../packages/types/src/forms/hr/HrPerformanceReviewFormSchema";

describe("HrPerformanceReview System Level Integration Test", () => {
  const server = new HrPerformanceReviewRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = HrPerformanceReviewFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
