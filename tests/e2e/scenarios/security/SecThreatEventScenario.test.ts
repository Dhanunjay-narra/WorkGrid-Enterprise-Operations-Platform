import { SecThreatEventGrpcService } from "../../../services/core-engine/src/security/grpc/SecThreatEventGrpcService";
import { SecThreatEventMetrics } from "../../../services/core-engine/src/security/metrics/SecThreatEventMetrics";

describe("SecThreatEvent End-to-End Enterprise Scenario", () => {
  const grpcService = new SecThreatEventGrpcService();

  test("dispatches and verifies SecThreatEvent gRPC call", (done) => {
    grpcService.getSecThreatEvent({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SecThreatEventMetrics.recordOperation("READ");
      expect(SecThreatEventMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
