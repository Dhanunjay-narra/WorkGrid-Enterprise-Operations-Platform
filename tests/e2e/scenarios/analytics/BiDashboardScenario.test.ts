import { BiDashboardGrpcService } from "../../../services/core-engine/src/analytics/grpc/BiDashboardGrpcService";
import { BiDashboardMetrics } from "../../../services/core-engine/src/analytics/metrics/BiDashboardMetrics";

describe("BiDashboard End-to-End Enterprise Scenario", () => {
  const grpcService = new BiDashboardGrpcService();

  test("dispatches and verifies BiDashboard gRPC call", (done) => {
    grpcService.getBiDashboard({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      BiDashboardMetrics.recordOperation("READ");
      expect(BiDashboardMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
