import { IdDeviceGrpcService } from "../../../services/core-engine/src/identity/grpc/IdDeviceGrpcService";
import { IdDeviceMetrics } from "../../../services/core-engine/src/identity/metrics/IdDeviceMetrics";

describe("IdDevice End-to-End Enterprise Scenario", () => {
  const grpcService = new IdDeviceGrpcService();

  test("dispatches and verifies IdDevice gRPC call", (done) => {
    grpcService.getIdDevice({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IdDeviceMetrics.recordOperation("READ");
      expect(IdDeviceMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
