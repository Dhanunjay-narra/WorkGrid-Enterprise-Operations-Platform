import { IntSyncHistoryGrpcService } from "../../../services/core-engine/src/integrations/grpc/IntSyncHistoryGrpcService";
import { IntSyncHistoryMetrics } from "../../../services/core-engine/src/integrations/metrics/IntSyncHistoryMetrics";

describe("IntSyncHistory End-to-End Enterprise Scenario", () => {
  const grpcService = new IntSyncHistoryGrpcService();

  test("dispatches and verifies IntSyncHistory gRPC call", (done) => {
    grpcService.getIntSyncHistory({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IntSyncHistoryMetrics.recordOperation("READ");
      expect(IntSyncHistoryMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
