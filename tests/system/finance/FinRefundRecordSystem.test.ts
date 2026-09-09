import { FinRefundRecordRpcServer } from "../../../services/core-engine/src/finance/rpc/servers/FinRefundRecordRpcServer";
import { FinRefundRecordFormValidator } from "../../../packages/types/src/forms/finance/FinRefundRecordFormSchema";

describe("FinRefundRecord System Level Integration Test", () => {
  const server = new FinRefundRecordRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = FinRefundRecordFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
