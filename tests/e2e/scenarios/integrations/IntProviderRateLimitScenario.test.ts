import { IntProviderRateLimitGrpcService } from "../../../services/core-engine/src/integrations/grpc/IntProviderRateLimitGrpcService";
import { IntProviderRateLimitMetrics } from "../../../services/core-engine/src/integrations/metrics/IntProviderRateLimitMetrics";

describe("IntProviderRateLimit End-to-End Enterprise Scenario", () => {
  const grpcService = new IntProviderRateLimitGrpcService();

  test("dispatches and verifies IntProviderRateLimit gRPC call", (done) => {
    grpcService.getIntProviderRateLimit({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IntProviderRateLimitMetrics.recordOperation("READ");
      expect(IntProviderRateLimitMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
