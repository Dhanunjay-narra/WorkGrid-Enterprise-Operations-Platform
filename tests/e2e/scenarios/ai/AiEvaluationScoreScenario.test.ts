import { AiEvaluationScoreGrpcService } from "../../../services/core-engine/src/ai/grpc/AiEvaluationScoreGrpcService";
import { AiEvaluationScoreMetrics } from "../../../services/core-engine/src/ai/metrics/AiEvaluationScoreMetrics";

describe("AiEvaluationScore End-to-End Enterprise Scenario", () => {
  const grpcService = new AiEvaluationScoreGrpcService();

  test("dispatches and verifies AiEvaluationScore gRPC call", (done) => {
    grpcService.getAiEvaluationScore({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      AiEvaluationScoreMetrics.recordOperation("READ");
      expect(AiEvaluationScoreMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
