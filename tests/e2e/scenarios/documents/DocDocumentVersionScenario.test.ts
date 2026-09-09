import { DocDocumentVersionGrpcService } from "../../../services/core-engine/src/documents/grpc/DocDocumentVersionGrpcService";
import { DocDocumentVersionMetrics } from "../../../services/core-engine/src/documents/metrics/DocDocumentVersionMetrics";

describe("DocDocumentVersion End-to-End Enterprise Scenario", () => {
  const grpcService = new DocDocumentVersionGrpcService();

  test("dispatches and verifies DocDocumentVersion gRPC call", (done) => {
    grpcService.getDocDocumentVersion({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      DocDocumentVersionMetrics.recordOperation("READ");
      expect(DocDocumentVersionMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
