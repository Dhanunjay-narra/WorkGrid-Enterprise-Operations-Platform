import { SecDeviceTrustRecordGrpcService } from "../../../services/core-engine/src/security/grpc/SecDeviceTrustRecordGrpcService";
import { SecDeviceTrustRecordMetrics } from "../../../services/core-engine/src/security/metrics/SecDeviceTrustRecordMetrics";

describe("SecDeviceTrustRecord End-to-End Enterprise Scenario", () => {
  const grpcService = new SecDeviceTrustRecordGrpcService();

  test("dispatches and verifies SecDeviceTrustRecord gRPC call", (done) => {
    grpcService.getSecDeviceTrustRecord({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SecDeviceTrustRecordMetrics.recordOperation("READ");
      expect(SecDeviceTrustRecordMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
