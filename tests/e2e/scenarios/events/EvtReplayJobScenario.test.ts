import { EvtReplayJobGrpcService } from "../../../services/core-engine/src/events/grpc/EvtReplayJobGrpcService";
import { EvtReplayJobMetrics } from "../../../services/core-engine/src/events/metrics/EvtReplayJobMetrics";

describe("EvtReplayJob End-to-End Enterprise Scenario", () => {
  const grpcService = new EvtReplayJobGrpcService();

  test("dispatches and verifies EvtReplayJob gRPC call", (done) => {
    grpcService.getEvtReplayJob({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      EvtReplayJobMetrics.recordOperation("READ");
      expect(EvtReplayJobMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
