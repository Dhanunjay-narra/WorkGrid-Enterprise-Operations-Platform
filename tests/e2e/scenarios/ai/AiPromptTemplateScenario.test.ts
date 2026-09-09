import { AiPromptTemplateGrpcService } from "../../../services/core-engine/src/ai/grpc/AiPromptTemplateGrpcService";
import { AiPromptTemplateMetrics } from "../../../services/core-engine/src/ai/metrics/AiPromptTemplateMetrics";

describe("AiPromptTemplate End-to-End Enterprise Scenario", () => {
  const grpcService = new AiPromptTemplateGrpcService();

  test("dispatches and verifies AiPromptTemplate gRPC call", (done) => {
    grpcService.getAiPromptTemplate({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      AiPromptTemplateMetrics.recordOperation("READ");
      expect(AiPromptTemplateMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
