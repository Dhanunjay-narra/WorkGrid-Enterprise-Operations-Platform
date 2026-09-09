import { AiToolDefinitionGrpcService } from "../../../services/core-engine/src/ai/grpc/AiToolDefinitionGrpcService";
import { AiToolDefinitionMetrics } from "../../../services/core-engine/src/ai/metrics/AiToolDefinitionMetrics";

describe("AiToolDefinition End-to-End Enterprise Scenario", () => {
  const grpcService = new AiToolDefinitionGrpcService();

  test("dispatches and verifies AiToolDefinition gRPC call", (done) => {
    grpcService.getAiToolDefinition({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      AiToolDefinitionMetrics.recordOperation("READ");
      expect(AiToolDefinitionMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
