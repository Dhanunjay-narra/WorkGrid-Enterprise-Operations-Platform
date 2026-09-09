import { AiAgentConversationSessionGrpcService } from "../../../services/core-engine/src/ai/grpc/AiAgentConversationSessionGrpcService";
import { AiAgentConversationSessionMetrics } from "../../../services/core-engine/src/ai/metrics/AiAgentConversationSessionMetrics";

describe("AiAgentConversationSession End-to-End Enterprise Scenario", () => {
  const grpcService = new AiAgentConversationSessionGrpcService();

  test("dispatches and verifies AiAgentConversationSession gRPC call", (done) => {
    grpcService.getAiAgentConversationSession({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      AiAgentConversationSessionMetrics.recordOperation("READ");
      expect(AiAgentConversationSessionMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
