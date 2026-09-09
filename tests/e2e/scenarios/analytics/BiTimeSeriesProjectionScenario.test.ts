import { BiTimeSeriesProjectionGrpcService } from "../../../services/core-engine/src/analytics/grpc/BiTimeSeriesProjectionGrpcService";
import { BiTimeSeriesProjectionMetrics } from "../../../services/core-engine/src/analytics/metrics/BiTimeSeriesProjectionMetrics";

describe("BiTimeSeriesProjection End-to-End Enterprise Scenario", () => {
  const grpcService = new BiTimeSeriesProjectionGrpcService();

  test("dispatches and verifies BiTimeSeriesProjection gRPC call", (done) => {
    grpcService.getBiTimeSeriesProjection({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      BiTimeSeriesProjectionMetrics.recordOperation("READ");
      expect(BiTimeSeriesProjectionMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
