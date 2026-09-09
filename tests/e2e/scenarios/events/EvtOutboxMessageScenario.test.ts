import { EvtOutboxMessageGrpcService } from "../../../services/core-engine/src/events/grpc/EvtOutboxMessageGrpcService";
import { EvtOutboxMessageMetrics } from "../../../services/core-engine/src/events/metrics/EvtOutboxMessageMetrics";

describe("EvtOutboxMessage End-to-End Enterprise Scenario", () => {
  const grpcService = new EvtOutboxMessageGrpcService();

  test("dispatches and verifies EvtOutboxMessage gRPC call", (done) => {
    grpcService.getEvtOutboxMessage({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      EvtOutboxMessageMetrics.recordOperation("READ");
      expect(EvtOutboxMessageMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
