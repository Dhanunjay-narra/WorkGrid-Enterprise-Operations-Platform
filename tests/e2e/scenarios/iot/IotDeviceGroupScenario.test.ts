import { IotDeviceGroupGrpcService } from "../../../services/core-engine/src/iot/grpc/IotDeviceGroupGrpcService";
import { IotDeviceGroupMetrics } from "../../../services/core-engine/src/iot/metrics/IotDeviceGroupMetrics";

describe("IotDeviceGroup End-to-End Enterprise Scenario", () => {
  const grpcService = new IotDeviceGroupGrpcService();

  test("dispatches and verifies IotDeviceGroup gRPC call", (done) => {
    grpcService.getIotDeviceGroup({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IotDeviceGroupMetrics.recordOperation("READ");
      expect(IotDeviceGroupMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
