import { InvSupplierRpcServer } from "../../../services/core-engine/src/inventory/rpc/servers/InvSupplierRpcServer";
import { InvSupplierFormValidator } from "../../../packages/types/src/forms/inventory/InvSupplierFormSchema";

describe("InvSupplier System Level Integration Test", () => {
  const server = new InvSupplierRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = InvSupplierFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
