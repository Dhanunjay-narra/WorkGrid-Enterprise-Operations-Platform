import { SupArticleCategoryGrpcService } from "../../../services/core-engine/src/support/grpc/SupArticleCategoryGrpcService";
import { SupArticleCategoryMetrics } from "../../../services/core-engine/src/support/metrics/SupArticleCategoryMetrics";

describe("SupArticleCategory End-to-End Enterprise Scenario", () => {
  const grpcService = new SupArticleCategoryGrpcService();

  test("dispatches and verifies SupArticleCategory gRPC call", (done) => {
    grpcService.getSupArticleCategory({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SupArticleCategoryMetrics.recordOperation("READ");
      expect(SupArticleCategoryMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
