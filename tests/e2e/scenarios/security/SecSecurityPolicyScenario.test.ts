import { SecSecurityPolicyGrpcService } from "../../../services/core-engine/src/security/grpc/SecSecurityPolicyGrpcService";
import { SecSecurityPolicyMetrics } from "../../../services/core-engine/src/security/metrics/SecSecurityPolicyMetrics";

describe("SecSecurityPolicy End-to-End Enterprise Scenario", () => {
  const grpcService = new SecSecurityPolicyGrpcService();

  test("dispatches and verifies SecSecurityPolicy gRPC call", (done) => {
    grpcService.getSecSecurityPolicy({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SecSecurityPolicyMetrics.recordOperation("READ");
      expect(SecSecurityPolicyMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
