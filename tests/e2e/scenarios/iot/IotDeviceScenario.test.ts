import { IotDeviceGrpcService } from "../../../services/core-engine/src/iot/grpc/IotDeviceGrpcService";
import { IotDeviceMetrics } from "../../../services/core-engine/src/iot/metrics/IotDeviceMetrics";

describe("IotDevice End-to-End Enterprise Scenario", () => {
  const grpcService = new IotDeviceGrpcService();

  test("dispatches and verifies IotDevice gRPC call", (done) => {
    grpcService.getIotDevice({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IotDeviceMetrics.recordOperation("READ");
      expect(IotDeviceMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
