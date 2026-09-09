import { SupFeedbackItemGrpcService } from "../../../services/core-engine/src/support/grpc/SupFeedbackItemGrpcService";
import { SupFeedbackItemMetrics } from "../../../services/core-engine/src/support/metrics/SupFeedbackItemMetrics";

describe("SupFeedbackItem End-to-End Enterprise Scenario", () => {
  const grpcService = new SupFeedbackItemGrpcService();

  test("dispatches and verifies SupFeedbackItem gRPC call", (done) => {
    grpcService.getSupFeedbackItem({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SupFeedbackItemMetrics.recordOperation("READ");
      expect(SupFeedbackItemMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
