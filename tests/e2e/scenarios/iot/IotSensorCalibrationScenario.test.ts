import { IotSensorCalibrationGrpcService } from "../../../services/core-engine/src/iot/grpc/IotSensorCalibrationGrpcService";
import { IotSensorCalibrationMetrics } from "../../../services/core-engine/src/iot/metrics/IotSensorCalibrationMetrics";

describe("IotSensorCalibration End-to-End Enterprise Scenario", () => {
  const grpcService = new IotSensorCalibrationGrpcService();

  test("dispatches and verifies IotSensorCalibration gRPC call", (done) => {
    grpcService.getIotSensorCalibration({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IotSensorCalibrationMetrics.recordOperation("READ");
      expect(IotSensorCalibrationMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
