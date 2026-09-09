import { AiModelRoutingRuleGrpcService } from "../../../services/core-engine/src/ai/grpc/AiModelRoutingRuleGrpcService";
import { AiModelRoutingRuleMetrics } from "../../../services/core-engine/src/ai/metrics/AiModelRoutingRuleMetrics";

describe("AiModelRoutingRule End-to-End Enterprise Scenario", () => {
  const grpcService = new AiModelRoutingRuleGrpcService();

  test("dispatches and verifies AiModelRoutingRule gRPC call", (done) => {
    grpcService.getAiModelRoutingRule({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      AiModelRoutingRuleMetrics.recordOperation("READ");
      expect(AiModelRoutingRuleMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
