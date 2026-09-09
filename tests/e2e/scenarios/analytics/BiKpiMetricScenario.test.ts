import { BiKpiMetricGrpcService } from "../../../services/core-engine/src/analytics/grpc/BiKpiMetricGrpcService";
import { BiKpiMetricMetrics } from "../../../services/core-engine/src/analytics/metrics/BiKpiMetricMetrics";

describe("BiKpiMetric End-to-End Enterprise Scenario", () => {
  const grpcService = new BiKpiMetricGrpcService();

  test("dispatches and verifies BiKpiMetric gRPC call", (done) => {
    grpcService.getBiKpiMetric({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      BiKpiMetricMetrics.recordOperation("READ");
      expect(BiKpiMetricMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
