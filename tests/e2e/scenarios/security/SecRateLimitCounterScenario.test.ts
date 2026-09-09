import { SecRateLimitCounterGrpcService } from "../../../services/core-engine/src/security/grpc/SecRateLimitCounterGrpcService";
import { SecRateLimitCounterMetrics } from "../../../services/core-engine/src/security/metrics/SecRateLimitCounterMetrics";

describe("SecRateLimitCounter End-to-End Enterprise Scenario", () => {
  const grpcService = new SecRateLimitCounterGrpcService();

  test("dispatches and verifies SecRateLimitCounter gRPC call", (done) => {
    grpcService.getSecRateLimitCounter({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SecRateLimitCounterMetrics.recordOperation("READ");
      expect(SecRateLimitCounterMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
