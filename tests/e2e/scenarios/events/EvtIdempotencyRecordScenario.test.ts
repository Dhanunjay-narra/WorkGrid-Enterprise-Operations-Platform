import { EvtIdempotencyRecordGrpcService } from "../../../services/core-engine/src/events/grpc/EvtIdempotencyRecordGrpcService";
import { EvtIdempotencyRecordMetrics } from "../../../services/core-engine/src/events/metrics/EvtIdempotencyRecordMetrics";

describe("EvtIdempotencyRecord End-to-End Enterprise Scenario", () => {
  const grpcService = new EvtIdempotencyRecordGrpcService();

  test("dispatches and verifies EvtIdempotencyRecord gRPC call", (done) => {
    grpcService.getEvtIdempotencyRecord({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      EvtIdempotencyRecordMetrics.recordOperation("READ");
      expect(EvtIdempotencyRecordMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
