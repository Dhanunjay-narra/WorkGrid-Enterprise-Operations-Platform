import { SecAccessReviewScheduleGrpcService } from "../../../services/core-engine/src/security/grpc/SecAccessReviewScheduleGrpcService";
import { SecAccessReviewScheduleMetrics } from "../../../services/core-engine/src/security/metrics/SecAccessReviewScheduleMetrics";

describe("SecAccessReviewSchedule End-to-End Enterprise Scenario", () => {
  const grpcService = new SecAccessReviewScheduleGrpcService();

  test("dispatches and verifies SecAccessReviewSchedule gRPC call", (done) => {
    grpcService.getSecAccessReviewSchedule({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SecAccessReviewScheduleMetrics.recordOperation("READ");
      expect(SecAccessReviewScheduleMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
