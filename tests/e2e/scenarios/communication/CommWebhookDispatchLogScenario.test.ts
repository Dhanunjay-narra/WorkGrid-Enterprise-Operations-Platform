import { CommWebhookDispatchLogGrpcService } from "../../../services/core-engine/src/communication/grpc/CommWebhookDispatchLogGrpcService";
import { CommWebhookDispatchLogMetrics } from "../../../services/core-engine/src/communication/metrics/CommWebhookDispatchLogMetrics";

describe("CommWebhookDispatchLog End-to-End Enterprise Scenario", () => {
  const grpcService = new CommWebhookDispatchLogGrpcService();

  test("dispatches and verifies CommWebhookDispatchLog gRPC call", (done) => {
    grpcService.getCommWebhookDispatchLog({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CommWebhookDispatchLogMetrics.recordOperation("READ");
      expect(CommWebhookDispatchLogMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
