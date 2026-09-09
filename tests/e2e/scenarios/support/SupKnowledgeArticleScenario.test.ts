import { SupKnowledgeArticleGrpcService } from "../../../services/core-engine/src/support/grpc/SupKnowledgeArticleGrpcService";
import { SupKnowledgeArticleMetrics } from "../../../services/core-engine/src/support/metrics/SupKnowledgeArticleMetrics";

describe("SupKnowledgeArticle End-to-End Enterprise Scenario", () => {
  const grpcService = new SupKnowledgeArticleGrpcService();

  test("dispatches and verifies SupKnowledgeArticle gRPC call", (done) => {
    grpcService.getSupKnowledgeArticle({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SupKnowledgeArticleMetrics.recordOperation("READ");
      expect(SupKnowledgeArticleMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
