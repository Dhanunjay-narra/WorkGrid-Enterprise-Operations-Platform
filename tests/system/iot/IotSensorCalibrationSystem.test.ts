import { IotSensorCalibrationRpcServer } from "../../../services/core-engine/src/iot/rpc/servers/IotSensorCalibrationRpcServer";
import { IotSensorCalibrationFormValidator } from "../../../packages/types/src/forms/iot/IotSensorCalibrationFormSchema";

describe("IotSensorCalibration System Level Integration Test", () => {
  const server = new IotSensorCalibrationRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IotSensorCalibrationFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
