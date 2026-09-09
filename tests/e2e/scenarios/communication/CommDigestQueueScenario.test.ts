import { CommDigestQueueGrpcService } from "../../../services/core-engine/src/communication/grpc/CommDigestQueueGrpcService";
import { CommDigestQueueMetrics } from "../../../services/core-engine/src/communication/metrics/CommDigestQueueMetrics";

describe("CommDigestQueue End-to-End Enterprise Scenario", () => {
  const grpcService = new CommDigestQueueGrpcService();

  test("dispatches and verifies CommDigestQueue gRPC call", (done) => {
    grpcService.getCommDigestQueue({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CommDigestQueueMetrics.recordOperation("READ");
      expect(CommDigestQueueMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
