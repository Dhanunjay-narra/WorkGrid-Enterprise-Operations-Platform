import { EvtPublishMetricGrpcService } from "../../../services/core-engine/src/events/grpc/EvtPublishMetricGrpcService";
import { EvtPublishMetricMetrics } from "../../../services/core-engine/src/events/metrics/EvtPublishMetricMetrics";

describe("EvtPublishMetric End-to-End Enterprise Scenario", () => {
  const grpcService = new EvtPublishMetricGrpcService();

  test("dispatches and verifies EvtPublishMetric gRPC call", (done) => {
    grpcService.getEvtPublishMetric({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      EvtPublishMetricMetrics.recordOperation("READ");
      expect(EvtPublishMetricMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
