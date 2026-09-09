import { HrOnboardingChecklistGrpcService } from "../../../services/core-engine/src/hr/grpc/HrOnboardingChecklistGrpcService";
import { HrOnboardingChecklistMetrics } from "../../../services/core-engine/src/hr/metrics/HrOnboardingChecklistMetrics";

describe("HrOnboardingChecklist End-to-End Enterprise Scenario", () => {
  const grpcService = new HrOnboardingChecklistGrpcService();

  test("dispatches and verifies HrOnboardingChecklist gRPC call", (done) => {
    grpcService.getHrOnboardingChecklist({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      HrOnboardingChecklistMetrics.recordOperation("READ");
      expect(HrOnboardingChecklistMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
