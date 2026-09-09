import { SecTamperLogGrpcService } from "../../../services/core-engine/src/security/grpc/SecTamperLogGrpcService";
import { SecTamperLogMetrics } from "../../../services/core-engine/src/security/metrics/SecTamperLogMetrics";

describe("SecTamperLog End-to-End Enterprise Scenario", () => {
  const grpcService = new SecTamperLogGrpcService();

  test("dispatches and verifies SecTamperLog gRPC call", (done) => {
    grpcService.getSecTamperLog({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SecTamperLogMetrics.recordOperation("READ");
      expect(SecTamperLogMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
