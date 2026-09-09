import { IntTransformationRuleGrpcService } from "../../../services/core-engine/src/integrations/grpc/IntTransformationRuleGrpcService";
import { IntTransformationRuleMetrics } from "../../../services/core-engine/src/integrations/metrics/IntTransformationRuleMetrics";

describe("IntTransformationRule End-to-End Enterprise Scenario", () => {
  const grpcService = new IntTransformationRuleGrpcService();

  test("dispatches and verifies IntTransformationRule gRPC call", (done) => {
    grpcService.getIntTransformationRule({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IntTransformationRuleMetrics.recordOperation("READ");
      expect(IntTransformationRuleMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
