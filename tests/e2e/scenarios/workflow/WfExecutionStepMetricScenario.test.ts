import { WfExecutionStepMetricGrpcService } from "../../../services/core-engine/src/workflow/grpc/WfExecutionStepMetricGrpcService";
import { WfExecutionStepMetricMetrics } from "../../../services/core-engine/src/workflow/metrics/WfExecutionStepMetricMetrics";

describe("WfExecutionStepMetric End-to-End Enterprise Scenario", () => {
  const grpcService = new WfExecutionStepMetricGrpcService();

  test("dispatches and verifies WfExecutionStepMetric gRPC call", (done) => {
    grpcService.getWfExecutionStepMetric({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      WfExecutionStepMetricMetrics.recordOperation("READ");
      expect(WfExecutionStepMetricMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
