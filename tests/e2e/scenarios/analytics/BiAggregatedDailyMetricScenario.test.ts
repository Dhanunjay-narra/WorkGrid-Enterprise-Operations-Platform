import { BiAggregatedDailyMetricGrpcService } from "../../../services/core-engine/src/analytics/grpc/BiAggregatedDailyMetricGrpcService";
import { BiAggregatedDailyMetricMetrics } from "../../../services/core-engine/src/analytics/metrics/BiAggregatedDailyMetricMetrics";

describe("BiAggregatedDailyMetric End-to-End Enterprise Scenario", () => {
  const grpcService = new BiAggregatedDailyMetricGrpcService();

  test("dispatches and verifies BiAggregatedDailyMetric gRPC call", (done) => {
    grpcService.getBiAggregatedDailyMetric({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      BiAggregatedDailyMetricMetrics.recordOperation("READ");
      expect(BiAggregatedDailyMetricMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
