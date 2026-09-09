import { SupCsatScoreGrpcService } from "../../../services/core-engine/src/support/grpc/SupCsatScoreGrpcService";
import { SupCsatScoreMetrics } from "../../../services/core-engine/src/support/metrics/SupCsatScoreMetrics";

describe("SupCsatScore End-to-End Enterprise Scenario", () => {
  const grpcService = new SupCsatScoreGrpcService();

  test("dispatches and verifies SupCsatScore gRPC call", (done) => {
    grpcService.getSupCsatScore({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SupCsatScoreMetrics.recordOperation("READ");
      expect(SupCsatScoreMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
