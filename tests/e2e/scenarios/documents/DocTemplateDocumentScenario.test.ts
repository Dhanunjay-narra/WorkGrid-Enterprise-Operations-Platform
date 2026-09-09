import { DocTemplateDocumentGrpcService } from "../../../services/core-engine/src/documents/grpc/DocTemplateDocumentGrpcService";
import { DocTemplateDocumentMetrics } from "../../../services/core-engine/src/documents/metrics/DocTemplateDocumentMetrics";

describe("DocTemplateDocument End-to-End Enterprise Scenario", () => {
  const grpcService = new DocTemplateDocumentGrpcService();

  test("dispatches and verifies DocTemplateDocument gRPC call", (done) => {
    grpcService.getDocTemplateDocument({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      DocTemplateDocumentMetrics.recordOperation("READ");
      expect(DocTemplateDocumentMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
