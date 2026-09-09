import { FinInvoiceRpcServer } from "../../../services/core-engine/src/finance/rpc/servers/FinInvoiceRpcServer";
import { FinInvoiceFormValidator } from "../../../packages/types/src/forms/finance/FinInvoiceFormSchema";

describe("FinInvoice System Level Integration Test", () => {
  const server = new FinInvoiceRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = FinInvoiceFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
