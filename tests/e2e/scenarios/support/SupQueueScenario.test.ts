import { SupQueueGrpcService } from "../../../services/core-engine/src/support/grpc/SupQueueGrpcService";
import { SupQueueMetrics } from "../../../services/core-engine/src/support/metrics/SupQueueMetrics";

describe("SupQueue End-to-End Enterprise Scenario", () => {
  const grpcService = new SupQueueGrpcService();

  test("dispatches and verifies SupQueue gRPC call", (done) => {
    grpcService.getSupQueue({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SupQueueMetrics.recordOperation("READ");
      expect(SupQueueMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
