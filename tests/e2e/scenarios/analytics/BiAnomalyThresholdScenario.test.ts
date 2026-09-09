import { BiAnomalyThresholdGrpcService } from "../../../services/core-engine/src/analytics/grpc/BiAnomalyThresholdGrpcService";
import { BiAnomalyThresholdMetrics } from "../../../services/core-engine/src/analytics/metrics/BiAnomalyThresholdMetrics";

describe("BiAnomalyThreshold End-to-End Enterprise Scenario", () => {
  const grpcService = new BiAnomalyThresholdGrpcService();

  test("dispatches and verifies BiAnomalyThreshold gRPC call", (done) => {
    grpcService.getBiAnomalyThreshold({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      BiAnomalyThresholdMetrics.recordOperation("READ");
      expect(BiAnomalyThresholdMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
