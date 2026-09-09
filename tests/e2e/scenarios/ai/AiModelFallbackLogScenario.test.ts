import { AiModelFallbackLogGrpcService } from "../../../services/core-engine/src/ai/grpc/AiModelFallbackLogGrpcService";
import { AiModelFallbackLogMetrics } from "../../../services/core-engine/src/ai/metrics/AiModelFallbackLogMetrics";

describe("AiModelFallbackLog End-to-End Enterprise Scenario", () => {
  const grpcService = new AiModelFallbackLogGrpcService();

  test("dispatches and verifies AiModelFallbackLog gRPC call", (done) => {
    grpcService.getAiModelFallbackLog({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      AiModelFallbackLogMetrics.recordOperation("READ");
      expect(AiModelFallbackLogMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
