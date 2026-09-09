import { IotDeviceCommandGrpcService } from "../../../services/core-engine/src/iot/grpc/IotDeviceCommandGrpcService";
import { IotDeviceCommandMetrics } from "../../../services/core-engine/src/iot/metrics/IotDeviceCommandMetrics";

describe("IotDeviceCommand End-to-End Enterprise Scenario", () => {
  const grpcService = new IotDeviceCommandGrpcService();

  test("dispatches and verifies IotDeviceCommand gRPC call", (done) => {
    grpcService.getIotDeviceCommand({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IotDeviceCommandMetrics.recordOperation("READ");
      expect(IotDeviceCommandMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
