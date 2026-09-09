import { EvtEventBatchGrpcService } from "../../../services/core-engine/src/events/grpc/EvtEventBatchGrpcService";
import { EvtEventBatchMetrics } from "../../../services/core-engine/src/events/metrics/EvtEventBatchMetrics";

describe("EvtEventBatch End-to-End Enterprise Scenario", () => {
  const grpcService = new EvtEventBatchGrpcService();

  test("dispatches and verifies EvtEventBatch gRPC call", (done) => {
    grpcService.getEvtEventBatch({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      EvtEventBatchMetrics.recordOperation("READ");
      expect(EvtEventBatchMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
