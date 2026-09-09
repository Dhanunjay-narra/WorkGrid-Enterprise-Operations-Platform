import { DocAccessLogGrpcService } from "../../../services/core-engine/src/documents/grpc/DocAccessLogGrpcService";
import { DocAccessLogMetrics } from "../../../services/core-engine/src/documents/metrics/DocAccessLogMetrics";

describe("DocAccessLog End-to-End Enterprise Scenario", () => {
  const grpcService = new DocAccessLogGrpcService();

  test("dispatches and verifies DocAccessLog gRPC call", (done) => {
    grpcService.getDocAccessLog({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      DocAccessLogMetrics.recordOperation("READ");
      expect(DocAccessLogMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
