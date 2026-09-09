import { IdDeviceRpcServer } from "../../../services/core-engine/src/identity/rpc/servers/IdDeviceRpcServer";
import { IdDeviceFormValidator } from "../../../packages/types/src/forms/identity/IdDeviceFormSchema";

describe("IdDevice System Level Integration Test", () => {
  const server = new IdDeviceRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IdDeviceFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
