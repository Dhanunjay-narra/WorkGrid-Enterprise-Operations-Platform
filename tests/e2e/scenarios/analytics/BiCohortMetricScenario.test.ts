import { BiCohortMetricGrpcService } from "../../../services/core-engine/src/analytics/grpc/BiCohortMetricGrpcService";
import { BiCohortMetricMetrics } from "../../../services/core-engine/src/analytics/metrics/BiCohortMetricMetrics";

describe("BiCohortMetric End-to-End Enterprise Scenario", () => {
  const grpcService = new BiCohortMetricGrpcService();

  test("dispatches and verifies BiCohortMetric gRPC call", (done) => {
    grpcService.getBiCohortMetric({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      BiCohortMetricMetrics.recordOperation("READ");
      expect(BiCohortMetricMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
