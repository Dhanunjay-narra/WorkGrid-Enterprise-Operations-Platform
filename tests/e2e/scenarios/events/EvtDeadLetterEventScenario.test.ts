import { EvtDeadLetterEventGrpcService } from "../../../services/core-engine/src/events/grpc/EvtDeadLetterEventGrpcService";
import { EvtDeadLetterEventMetrics } from "../../../services/core-engine/src/events/metrics/EvtDeadLetterEventMetrics";

describe("EvtDeadLetterEvent End-to-End Enterprise Scenario", () => {
  const grpcService = new EvtDeadLetterEventGrpcService();

  test("dispatches and verifies EvtDeadLetterEvent gRPC call", (done) => {
    grpcService.getEvtDeadLetterEvent({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      EvtDeadLetterEventMetrics.recordOperation("READ");
      expect(EvtDeadLetterEventMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
