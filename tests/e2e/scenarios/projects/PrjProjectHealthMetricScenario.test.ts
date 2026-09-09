import { PrjProjectHealthMetricGrpcService } from "../../../services/core-engine/src/projects/grpc/PrjProjectHealthMetricGrpcService";
import { PrjProjectHealthMetricMetrics } from "../../../services/core-engine/src/projects/metrics/PrjProjectHealthMetricMetrics";

describe("PrjProjectHealthMetric End-to-End Enterprise Scenario", () => {
  const grpcService = new PrjProjectHealthMetricGrpcService();

  test("dispatches and verifies PrjProjectHealthMetric gRPC call", (done) => {
    grpcService.getPrjProjectHealthMetric({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      PrjProjectHealthMetricMetrics.recordOperation("READ");
      expect(PrjProjectHealthMetricMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
