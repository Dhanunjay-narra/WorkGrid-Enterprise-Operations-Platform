import { DocDocumentFileGrpcService } from "../../../services/core-engine/src/documents/grpc/DocDocumentFileGrpcService";
import { DocDocumentFileMetrics } from "../../../services/core-engine/src/documents/metrics/DocDocumentFileMetrics";

describe("DocDocumentFile End-to-End Enterprise Scenario", () => {
  const grpcService = new DocDocumentFileGrpcService();

  test("dispatches and verifies DocDocumentFile gRPC call", (done) => {
    grpcService.getDocDocumentFile({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      DocDocumentFileMetrics.recordOperation("READ");
      expect(DocDocumentFileMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
