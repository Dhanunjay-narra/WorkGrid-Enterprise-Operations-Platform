import { HrOkrGoalGrpcService } from "../../../services/core-engine/src/hr/grpc/HrOkrGoalGrpcService";
import { HrOkrGoalMetrics } from "../../../services/core-engine/src/hr/metrics/HrOkrGoalMetrics";

describe("HrOkrGoal End-to-End Enterprise Scenario", () => {
  const grpcService = new HrOkrGoalGrpcService();

  test("dispatches and verifies HrOkrGoal gRPC call", (done) => {
    grpcService.getHrOkrGoal({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      HrOkrGoalMetrics.recordOperation("READ");
      expect(HrOkrGoalMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
