import { SupSupportAgentGrpcService } from "../../../services/core-engine/src/support/grpc/SupSupportAgentGrpcService";
import { SupSupportAgentMetrics } from "../../../services/core-engine/src/support/metrics/SupSupportAgentMetrics";

describe("SupSupportAgent End-to-End Enterprise Scenario", () => {
  const grpcService = new SupSupportAgentGrpcService();

  test("dispatches and verifies SupSupportAgent gRPC call", (done) => {
    grpcService.getSupSupportAgent({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SupSupportAgentMetrics.recordOperation("READ");
      expect(SupSupportAgentMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
