import { IdAccessReviewGrpcService } from "../../../services/core-engine/src/identity/grpc/IdAccessReviewGrpcService";
import { IdAccessReviewMetrics } from "../../../services/core-engine/src/identity/metrics/IdAccessReviewMetrics";

describe("IdAccessReview End-to-End Enterprise Scenario", () => {
  const grpcService = new IdAccessReviewGrpcService();

  test("dispatches and verifies IdAccessReview gRPC call", (done) => {
    grpcService.getIdAccessReview({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IdAccessReviewMetrics.recordOperation("READ");
      expect(IdAccessReviewMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
