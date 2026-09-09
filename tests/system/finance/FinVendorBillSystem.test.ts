import { FinVendorBillRpcServer } from "../../../services/core-engine/src/finance/rpc/servers/FinVendorBillRpcServer";
import { FinVendorBillFormValidator } from "../../../packages/types/src/forms/finance/FinVendorBillFormSchema";

describe("FinVendorBill System Level Integration Test", () => {
  const server = new FinVendorBillRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = FinVendorBillFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
