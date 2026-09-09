import { CommNotificationPreferenceGrpcService } from "../../../services/core-engine/src/communication/grpc/CommNotificationPreferenceGrpcService";
import { CommNotificationPreferenceMetrics } from "../../../services/core-engine/src/communication/metrics/CommNotificationPreferenceMetrics";

describe("CommNotificationPreference End-to-End Enterprise Scenario", () => {
  const grpcService = new CommNotificationPreferenceGrpcService();

  test("dispatches and verifies CommNotificationPreference gRPC call", (done) => {
    grpcService.getCommNotificationPreference({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CommNotificationPreferenceMetrics.recordOperation("READ");
      expect(CommNotificationPreferenceMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
