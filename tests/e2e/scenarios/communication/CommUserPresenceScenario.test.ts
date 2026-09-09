import { CommUserPresenceGrpcService } from "../../../services/core-engine/src/communication/grpc/CommUserPresenceGrpcService";
import { CommUserPresenceMetrics } from "../../../services/core-engine/src/communication/metrics/CommUserPresenceMetrics";

describe("CommUserPresence End-to-End Enterprise Scenario", () => {
  const grpcService = new CommUserPresenceGrpcService();

  test("dispatches and verifies CommUserPresence gRPC call", (done) => {
    grpcService.getCommUserPresence({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CommUserPresenceMetrics.recordOperation("READ");
      expect(CommUserPresenceMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
