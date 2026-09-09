import { AiConfidenceScorecardGrpcService } from "../../../services/core-engine/src/ai/grpc/AiConfidenceScorecardGrpcService";
import { AiConfidenceScorecardMetrics } from "../../../services/core-engine/src/ai/metrics/AiConfidenceScorecardMetrics";

describe("AiConfidenceScorecard End-to-End Enterprise Scenario", () => {
  const grpcService = new AiConfidenceScorecardGrpcService();

  test("dispatches and verifies AiConfidenceScorecard gRPC call", (done) => {
    grpcService.getAiConfidenceScorecard({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      AiConfidenceScorecardMetrics.recordOperation("READ");
      expect(AiConfidenceScorecardMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
