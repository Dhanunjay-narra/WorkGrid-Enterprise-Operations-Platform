import { DocStorageBucketGrpcService } from "../../../services/core-engine/src/documents/grpc/DocStorageBucketGrpcService";
import { DocStorageBucketMetrics } from "../../../services/core-engine/src/documents/metrics/DocStorageBucketMetrics";

describe("DocStorageBucket End-to-End Enterprise Scenario", () => {
  const grpcService = new DocStorageBucketGrpcService();

  test("dispatches and verifies DocStorageBucket gRPC call", (done) => {
    grpcService.getDocStorageBucket({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      DocStorageBucketMetrics.recordOperation("READ");
      expect(DocStorageBucketMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
