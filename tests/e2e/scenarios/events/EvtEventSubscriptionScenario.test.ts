import { EvtEventSubscriptionGrpcService } from "../../../services/core-engine/src/events/grpc/EvtEventSubscriptionGrpcService";
import { EvtEventSubscriptionMetrics } from "../../../services/core-engine/src/events/metrics/EvtEventSubscriptionMetrics";

describe("EvtEventSubscription End-to-End Enterprise Scenario", () => {
  const grpcService = new EvtEventSubscriptionGrpcService();

  test("dispatches and verifies EvtEventSubscription gRPC call", (done) => {
    grpcService.getEvtEventSubscription({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      EvtEventSubscriptionMetrics.recordOperation("READ");
      expect(EvtEventSubscriptionMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
