import { IotTelemetryPacketRpcServer } from "../../../services/core-engine/src/iot/rpc/servers/IotTelemetryPacketRpcServer";
import { IotTelemetryPacketFormValidator } from "../../../packages/types/src/forms/iot/IotTelemetryPacketFormSchema";

describe("IotTelemetryPacket System Level Integration Test", () => {
  const server = new IotTelemetryPacketRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IotTelemetryPacketFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
