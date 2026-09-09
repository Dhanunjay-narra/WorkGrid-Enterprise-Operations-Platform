import { AiDocumentChunkGrpcService } from "../../../services/core-engine/src/ai/grpc/AiDocumentChunkGrpcService";
import { AiDocumentChunkMetrics } from "../../../services/core-engine/src/ai/metrics/AiDocumentChunkMetrics";

describe("AiDocumentChunk End-to-End Enterprise Scenario", () => {
  const grpcService = new AiDocumentChunkGrpcService();

  test("dispatches and verifies AiDocumentChunk gRPC call", (done) => {
    grpcService.getAiDocumentChunk({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      AiDocumentChunkMetrics.recordOperation("READ");
      expect(AiDocumentChunkMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
