import { SecPiiMaskingRuleGrpcService } from "../../../services/core-engine/src/security/grpc/SecPiiMaskingRuleGrpcService";
import { SecPiiMaskingRuleMetrics } from "../../../services/core-engine/src/security/metrics/SecPiiMaskingRuleMetrics";

describe("SecPiiMaskingRule End-to-End Enterprise Scenario", () => {
  const grpcService = new SecPiiMaskingRuleGrpcService();

  test("dispatches and verifies SecPiiMaskingRule gRPC call", (done) => {
    grpcService.getSecPiiMaskingRule({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SecPiiMaskingRuleMetrics.recordOperation("READ");
      expect(SecPiiMaskingRuleMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
