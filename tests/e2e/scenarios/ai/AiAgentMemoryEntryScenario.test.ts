import { AiAgentMemoryEntryGrpcService } from "../../../services/core-engine/src/ai/grpc/AiAgentMemoryEntryGrpcService";
import { AiAgentMemoryEntryMetrics } from "../../../services/core-engine/src/ai/metrics/AiAgentMemoryEntryMetrics";

describe("AiAgentMemoryEntry End-to-End Enterprise Scenario", () => {
  const grpcService = new AiAgentMemoryEntryGrpcService();

  test("dispatches and verifies AiAgentMemoryEntry gRPC call", (done) => {
    grpcService.getAiAgentMemoryEntry({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      AiAgentMemoryEntryMetrics.recordOperation("READ");
      expect(AiAgentMemoryEntryMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
