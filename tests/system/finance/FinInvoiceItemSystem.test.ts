import { FinInvoiceItemRpcServer } from "../../../services/core-engine/src/finance/rpc/servers/FinInvoiceItemRpcServer";
import { FinInvoiceItemFormValidator } from "../../../packages/types/src/forms/finance/FinInvoiceItemFormSchema";

describe("FinInvoiceItem System Level Integration Test", () => {
  const server = new FinInvoiceItemRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = FinInvoiceItemFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
