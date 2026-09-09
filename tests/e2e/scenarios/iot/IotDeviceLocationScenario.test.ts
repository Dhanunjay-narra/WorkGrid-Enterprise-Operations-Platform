import { IotDeviceLocationGrpcService } from "../../../services/core-engine/src/iot/grpc/IotDeviceLocationGrpcService";
import { IotDeviceLocationMetrics } from "../../../services/core-engine/src/iot/metrics/IotDeviceLocationMetrics";

describe("IotDeviceLocation End-to-End Enterprise Scenario", () => {
  const grpcService = new IotDeviceLocationGrpcService();

  test("dispatches and verifies IotDeviceLocation gRPC call", (done) => {
    grpcService.getIotDeviceLocation({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IotDeviceLocationMetrics.recordOperation("READ");
      expect(IotDeviceLocationMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
