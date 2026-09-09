import { EvtConsumerGroupGrpcService } from "../../../services/core-engine/src/events/grpc/EvtConsumerGroupGrpcService";
import { EvtConsumerGroupMetrics } from "../../../services/core-engine/src/events/metrics/EvtConsumerGroupMetrics";

describe("EvtConsumerGroup End-to-End Enterprise Scenario", () => {
  const grpcService = new EvtConsumerGroupGrpcService();

  test("dispatches and verifies EvtConsumerGroup gRPC call", (done) => {
    grpcService.getEvtConsumerGroup({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      EvtConsumerGroupMetrics.recordOperation("READ");
      expect(EvtConsumerGroupMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
