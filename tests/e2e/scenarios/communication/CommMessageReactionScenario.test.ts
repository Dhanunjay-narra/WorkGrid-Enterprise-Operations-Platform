import { CommMessageReactionGrpcService } from "../../../services/core-engine/src/communication/grpc/CommMessageReactionGrpcService";
import { CommMessageReactionMetrics } from "../../../services/core-engine/src/communication/metrics/CommMessageReactionMetrics";

describe("CommMessageReaction End-to-End Enterprise Scenario", () => {
  const grpcService = new CommMessageReactionGrpcService();

  test("dispatches and verifies CommMessageReaction gRPC call", (done) => {
    grpcService.getCommMessageReaction({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CommMessageReactionMetrics.recordOperation("READ");
      expect(CommMessageReactionMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
