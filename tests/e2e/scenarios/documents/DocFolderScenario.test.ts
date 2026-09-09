import { DocFolderGrpcService } from "../../../services/core-engine/src/documents/grpc/DocFolderGrpcService";
import { DocFolderMetrics } from "../../../services/core-engine/src/documents/metrics/DocFolderMetrics";

describe("DocFolder End-to-End Enterprise Scenario", () => {
  const grpcService = new DocFolderGrpcService();

  test("dispatches and verifies DocFolder gRPC call", (done) => {
    grpcService.getDocFolder({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      DocFolderMetrics.recordOperation("READ");
      expect(DocFolderMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
