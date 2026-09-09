import { DocChunkIndexGrpcService } from "../../../services/core-engine/src/documents/grpc/DocChunkIndexGrpcService";
import { DocChunkIndexMetrics } from "../../../services/core-engine/src/documents/metrics/DocChunkIndexMetrics";

describe("DocChunkIndex End-to-End Enterprise Scenario", () => {
  const grpcService = new DocChunkIndexGrpcService();

  test("dispatches and verifies DocChunkIndex gRPC call", (done) => {
    grpcService.getDocChunkIndex({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      DocChunkIndexMetrics.recordOperation("READ");
      expect(DocChunkIndexMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
