import { DocMetadataTagGrpcService } from "../../../services/core-engine/src/documents/grpc/DocMetadataTagGrpcService";
import { DocMetadataTagMetrics } from "../../../services/core-engine/src/documents/metrics/DocMetadataTagMetrics";

describe("DocMetadataTag End-to-End Enterprise Scenario", () => {
  const grpcService = new DocMetadataTagGrpcService();

  test("dispatches and verifies DocMetadataTag gRPC call", (done) => {
    grpcService.getDocMetadataTag({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      DocMetadataTagMetrics.recordOperation("READ");
      expect(DocMetadataTagMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
