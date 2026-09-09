import { BiWidgetGrpcService } from "../../../services/core-engine/src/analytics/grpc/BiWidgetGrpcService";
import { BiWidgetMetrics } from "../../../services/core-engine/src/analytics/metrics/BiWidgetMetrics";

describe("BiWidget End-to-End Enterprise Scenario", () => {
  const grpcService = new BiWidgetGrpcService();

  test("dispatches and verifies BiWidget gRPC call", (done) => {
    grpcService.getBiWidget({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      BiWidgetMetrics.recordOperation("READ");
      expect(BiWidgetMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
