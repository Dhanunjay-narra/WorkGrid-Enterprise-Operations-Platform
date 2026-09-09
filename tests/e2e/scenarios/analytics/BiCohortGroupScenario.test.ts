import { BiCohortGroupGrpcService } from "../../../services/core-engine/src/analytics/grpc/BiCohortGroupGrpcService";
import { BiCohortGroupMetrics } from "../../../services/core-engine/src/analytics/metrics/BiCohortGroupMetrics";

describe("BiCohortGroup End-to-End Enterprise Scenario", () => {
  const grpcService = new BiCohortGroupGrpcService();

  test("dispatches and verifies BiCohortGroup gRPC call", (done) => {
    grpcService.getBiCohortGroup({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      BiCohortGroupMetrics.recordOperation("READ");
      expect(BiCohortGroupMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
