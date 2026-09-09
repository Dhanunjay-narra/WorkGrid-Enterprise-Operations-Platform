import { InvReorderRuleGrpcService } from "../../../services/core-engine/src/inventory/grpc/InvReorderRuleGrpcService";
import { InvReorderRuleMetrics } from "../../../services/core-engine/src/inventory/metrics/InvReorderRuleMetrics";

describe("InvReorderRule End-to-End Enterprise Scenario", () => {
  const grpcService = new InvReorderRuleGrpcService();

  test("dispatches and verifies InvReorderRule gRPC call", (done) => {
    grpcService.getInvReorderRule({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      InvReorderRuleMetrics.recordOperation("READ");
      expect(InvReorderRuleMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
