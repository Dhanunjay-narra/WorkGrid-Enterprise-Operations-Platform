import { AiVectorEmbeddingGrpcService } from "../../../services/core-engine/src/ai/grpc/AiVectorEmbeddingGrpcService";
import { AiVectorEmbeddingMetrics } from "../../../services/core-engine/src/ai/metrics/AiVectorEmbeddingMetrics";

describe("AiVectorEmbedding End-to-End Enterprise Scenario", () => {
  const grpcService = new AiVectorEmbeddingGrpcService();

  test("dispatches and verifies AiVectorEmbedding gRPC call", (done) => {
    grpcService.getAiVectorEmbedding({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      AiVectorEmbeddingMetrics.recordOperation("READ");
      expect(AiVectorEmbeddingMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
