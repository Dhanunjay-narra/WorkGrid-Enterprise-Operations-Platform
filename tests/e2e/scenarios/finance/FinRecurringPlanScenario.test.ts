import { FinRecurringPlanGrpcService } from "../../../services/core-engine/src/finance/grpc/FinRecurringPlanGrpcService";
import { FinRecurringPlanMetrics } from "../../../services/core-engine/src/finance/metrics/FinRecurringPlanMetrics";

describe("FinRecurringPlan End-to-End Enterprise Scenario", () => {
  const grpcService = new FinRecurringPlanGrpcService();

  test("dispatches and verifies FinRecurringPlan gRPC call", (done) => {
    grpcService.getFinRecurringPlan({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      FinRecurringPlanMetrics.recordOperation("READ");
      expect(FinRecurringPlanMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
