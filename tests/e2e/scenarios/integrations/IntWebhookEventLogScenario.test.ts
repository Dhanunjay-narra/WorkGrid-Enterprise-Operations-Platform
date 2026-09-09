import { IntWebhookEventLogGrpcService } from "../../../services/core-engine/src/integrations/grpc/IntWebhookEventLogGrpcService";
import { IntWebhookEventLogMetrics } from "../../../services/core-engine/src/integrations/metrics/IntWebhookEventLogMetrics";

describe("IntWebhookEventLog End-to-End Enterprise Scenario", () => {
  const grpcService = new IntWebhookEventLogGrpcService();

  test("dispatches and verifies IntWebhookEventLog gRPC call", (done) => {
    grpcService.getIntWebhookEventLog({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IntWebhookEventLogMetrics.recordOperation("READ");
      expect(IntWebhookEventLogMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
