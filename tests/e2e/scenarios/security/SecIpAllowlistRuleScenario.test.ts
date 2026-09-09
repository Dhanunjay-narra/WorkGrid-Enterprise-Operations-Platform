import { SecIpAllowlistRuleGrpcService } from "../../../services/core-engine/src/security/grpc/SecIpAllowlistRuleGrpcService";
import { SecIpAllowlistRuleMetrics } from "../../../services/core-engine/src/security/metrics/SecIpAllowlistRuleMetrics";

describe("SecIpAllowlistRule End-to-End Enterprise Scenario", () => {
  const grpcService = new SecIpAllowlistRuleGrpcService();

  test("dispatches and verifies SecIpAllowlistRule gRPC call", (done) => {
    grpcService.getSecIpAllowlistRule({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SecIpAllowlistRuleMetrics.recordOperation("READ");
      expect(SecIpAllowlistRuleMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
