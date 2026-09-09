import { SupEscalationRuleGrpcService } from "../../../services/core-engine/src/support/grpc/SupEscalationRuleGrpcService";
import { SupEscalationRuleMetrics } from "../../../services/core-engine/src/support/metrics/SupEscalationRuleMetrics";

describe("SupEscalationRule End-to-End Enterprise Scenario", () => {
  const grpcService = new SupEscalationRuleGrpcService();

  test("dispatches and verifies SupEscalationRule gRPC call", (done) => {
    grpcService.getSupEscalationRule({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SupEscalationRuleMetrics.recordOperation("READ");
      expect(SupEscalationRuleMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
