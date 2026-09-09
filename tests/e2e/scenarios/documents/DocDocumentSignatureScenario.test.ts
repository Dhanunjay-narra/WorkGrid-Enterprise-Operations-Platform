import { DocDocumentSignatureGrpcService } from "../../../services/core-engine/src/documents/grpc/DocDocumentSignatureGrpcService";
import { DocDocumentSignatureMetrics } from "../../../services/core-engine/src/documents/metrics/DocDocumentSignatureMetrics";

describe("DocDocumentSignature End-to-End Enterprise Scenario", () => {
  const grpcService = new DocDocumentSignatureGrpcService();

  test("dispatches and verifies DocDocumentSignature gRPC call", (done) => {
    grpcService.getDocDocumentSignature({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      DocDocumentSignatureMetrics.recordOperation("READ");
      expect(DocDocumentSignatureMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
