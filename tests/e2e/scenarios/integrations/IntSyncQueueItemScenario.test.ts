import { IntSyncQueueItemGrpcService } from "../../../services/core-engine/src/integrations/grpc/IntSyncQueueItemGrpcService";
import { IntSyncQueueItemMetrics } from "../../../services/core-engine/src/integrations/metrics/IntSyncQueueItemMetrics";

describe("IntSyncQueueItem End-to-End Enterprise Scenario", () => {
  const grpcService = new IntSyncQueueItemGrpcService();

  test("dispatches and verifies IntSyncQueueItem gRPC call", (done) => {
    grpcService.getIntSyncQueueItem({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IntSyncQueueItemMetrics.recordOperation("READ");
      expect(IntSyncQueueItemMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
