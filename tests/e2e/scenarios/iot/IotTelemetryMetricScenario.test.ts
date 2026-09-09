import { IotTelemetryMetricGrpcService } from "../../../services/core-engine/src/iot/grpc/IotTelemetryMetricGrpcService";
import { IotTelemetryMetricMetrics } from "../../../services/core-engine/src/iot/metrics/IotTelemetryMetricMetrics";

describe("IotTelemetryMetric End-to-End Enterprise Scenario", () => {
  const grpcService = new IotTelemetryMetricGrpcService();

  test("dispatches and verifies IotTelemetryMetric gRPC call", (done) => {
    grpcService.getIotTelemetryMetric({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IotTelemetryMetricMetrics.recordOperation("READ");
      expect(IotTelemetryMetricMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
