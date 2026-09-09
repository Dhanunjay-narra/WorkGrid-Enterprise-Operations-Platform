import { CommTypingStateGrpcService } from "../../../services/core-engine/src/communication/grpc/CommTypingStateGrpcService";
import { CommTypingStateMetrics } from "../../../services/core-engine/src/communication/metrics/CommTypingStateMetrics";

describe("CommTypingState End-to-End Enterprise Scenario", () => {
  const grpcService = new CommTypingStateGrpcService();

  test("dispatches and verifies CommTypingState gRPC call", (done) => {
    grpcService.getCommTypingState({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CommTypingStateMetrics.recordOperation("READ");
      expect(CommTypingStateMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
