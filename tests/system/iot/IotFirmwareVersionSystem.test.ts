import { IotFirmwareVersionRpcServer } from "../../../services/core-engine/src/iot/rpc/servers/IotFirmwareVersionRpcServer";
import { IotFirmwareVersionFormValidator } from "../../../packages/types/src/forms/iot/IotFirmwareVersionFormSchema";

describe("IotFirmwareVersion System Level Integration Test", () => {
  const server = new IotFirmwareVersionRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IotFirmwareVersionFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
