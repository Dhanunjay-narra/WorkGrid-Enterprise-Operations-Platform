import { SecAccessReviewScheduleRpcServer } from "../../../services/core-engine/src/security/rpc/servers/SecAccessReviewScheduleRpcServer";
import { SecAccessReviewScheduleFormValidator } from "../../../packages/types/src/forms/security/SecAccessReviewScheduleFormSchema";

describe("SecAccessReviewSchedule System Level Integration Test", () => {
  const server = new SecAccessReviewScheduleRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = SecAccessReviewScheduleFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
