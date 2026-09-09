import { HrPerformanceReviewGrpcService } from "../../../services/core-engine/src/hr/grpc/HrPerformanceReviewGrpcService";
import { HrPerformanceReviewMetrics } from "../../../services/core-engine/src/hr/metrics/HrPerformanceReviewMetrics";

describe("HrPerformanceReview End-to-End Enterprise Scenario", () => {
  const grpcService = new HrPerformanceReviewGrpcService();

  test("dispatches and verifies HrPerformanceReview gRPC call", (done) => {
    grpcService.getHrPerformanceReview({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      HrPerformanceReviewMetrics.recordOperation("READ");
      expect(HrPerformanceReviewMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
