import { BiDataSourceGrpcService } from "../../../services/core-engine/src/analytics/grpc/BiDataSourceGrpcService";
import { BiDataSourceMetrics } from "../../../services/core-engine/src/analytics/metrics/BiDataSourceMetrics";

describe("BiDataSource End-to-End Enterprise Scenario", () => {
  const grpcService = new BiDataSourceGrpcService();

  test("dispatches and verifies BiDataSource gRPC call", (done) => {
    grpcService.getBiDataSource({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      BiDataSourceMetrics.recordOperation("READ");
      expect(BiDataSourceMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
