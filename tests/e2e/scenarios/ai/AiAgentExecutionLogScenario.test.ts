import { AiAgentExecutionLogGrpcService } from "../../../services/core-engine/src/ai/grpc/AiAgentExecutionLogGrpcService";
import { AiAgentExecutionLogMetrics } from "../../../services/core-engine/src/ai/metrics/AiAgentExecutionLogMetrics";

describe("AiAgentExecutionLog End-to-End Enterprise Scenario", () => {
  const grpcService = new AiAgentExecutionLogGrpcService();

  test("dispatches and verifies AiAgentExecutionLog gRPC call", (done) => {
    grpcService.getAiAgentExecutionLog({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      AiAgentExecutionLogMetrics.recordOperation("READ");
      expect(AiAgentExecutionLogMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
