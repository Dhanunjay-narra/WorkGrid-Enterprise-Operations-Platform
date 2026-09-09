import { IntWebhookSubscriptionGrpcService } from "../../../services/core-engine/src/integrations/grpc/IntWebhookSubscriptionGrpcService";
import { IntWebhookSubscriptionMetrics } from "../../../services/core-engine/src/integrations/metrics/IntWebhookSubscriptionMetrics";

describe("IntWebhookSubscription End-to-End Enterprise Scenario", () => {
  const grpcService = new IntWebhookSubscriptionGrpcService();

  test("dispatches and verifies IntWebhookSubscription gRPC call", (done) => {
    grpcService.getIntWebhookSubscription({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IntWebhookSubscriptionMetrics.recordOperation("READ");
      expect(IntWebhookSubscriptionMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
