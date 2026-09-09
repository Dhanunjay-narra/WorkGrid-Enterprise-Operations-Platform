import { DocDocumentPermissionGrpcService } from "../../../services/core-engine/src/documents/grpc/DocDocumentPermissionGrpcService";
import { DocDocumentPermissionMetrics } from "../../../services/core-engine/src/documents/metrics/DocDocumentPermissionMetrics";

describe("DocDocumentPermission End-to-End Enterprise Scenario", () => {
  const grpcService = new DocDocumentPermissionGrpcService();

  test("dispatches and verifies DocDocumentPermission gRPC call", (done) => {
    grpcService.getDocDocumentPermission({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      DocDocumentPermissionMetrics.recordOperation("READ");
      expect(DocDocumentPermissionMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
