import { InvWarehouseZoneRpcServer } from "../../../services/core-engine/src/inventory/rpc/servers/InvWarehouseZoneRpcServer";
import { InvWarehouseZoneFormValidator } from "../../../packages/types/src/forms/inventory/InvWarehouseZoneFormSchema";

describe("InvWarehouseZone System Level Integration Test", () => {
  const server = new InvWarehouseZoneRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = InvWarehouseZoneFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
