import { InvStockReservationRpcServer } from "../../../services/core-engine/src/inventory/rpc/servers/InvStockReservationRpcServer";
import { InvStockReservationFormValidator } from "../../../packages/types/src/forms/inventory/InvStockReservationFormSchema";

describe("InvStockReservation System Level Integration Test", () => {
  const server = new InvStockReservationRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = InvStockReservationFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
