import { DocFileExportJobGrpcService } from "../../../services/core-engine/src/documents/grpc/DocFileExportJobGrpcService";
import { DocFileExportJobMetrics } from "../../../services/core-engine/src/documents/metrics/DocFileExportJobMetrics";

describe("DocFileExportJob End-to-End Enterprise Scenario", () => {
  const grpcService = new DocFileExportJobGrpcService();

  test("dispatches and verifies DocFileExportJob gRPC call", (done) => {
    grpcService.getDocFileExportJob({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      DocFileExportJobMetrics.recordOperation("READ");
      expect(DocFileExportJobMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
