import { IotDeviceRpcServer } from "../../../services/core-engine/src/iot/rpc/servers/IotDeviceRpcServer";
import { IotDeviceFormValidator } from "../../../packages/types/src/forms/iot/IotDeviceFormSchema";

describe("IotDevice System Level Integration Test", () => {
  const server = new IotDeviceRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IotDeviceFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
