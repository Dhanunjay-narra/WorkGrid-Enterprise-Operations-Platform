import { IotFirmwareVersionGrpcService } from "../../../services/core-engine/src/iot/grpc/IotFirmwareVersionGrpcService";
import { IotFirmwareVersionMetrics } from "../../../services/core-engine/src/iot/metrics/IotFirmwareVersionMetrics";

describe("IotFirmwareVersion End-to-End Enterprise Scenario", () => {
  const grpcService = new IotFirmwareVersionGrpcService();

  test("dispatches and verifies IotFirmwareVersion gRPC call", (done) => {
    grpcService.getIotFirmwareVersion({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IotFirmwareVersionMetrics.recordOperation("READ");
      expect(IotFirmwareVersionMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
