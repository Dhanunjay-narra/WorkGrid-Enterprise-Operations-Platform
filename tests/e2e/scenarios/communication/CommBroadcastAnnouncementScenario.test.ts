import { CommBroadcastAnnouncementGrpcService } from "../../../services/core-engine/src/communication/grpc/CommBroadcastAnnouncementGrpcService";
import { CommBroadcastAnnouncementMetrics } from "../../../services/core-engine/src/communication/metrics/CommBroadcastAnnouncementMetrics";

describe("CommBroadcastAnnouncement End-to-End Enterprise Scenario", () => {
  const grpcService = new CommBroadcastAnnouncementGrpcService();

  test("dispatches and verifies CommBroadcastAnnouncement gRPC call", (done) => {
    grpcService.getCommBroadcastAnnouncement({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CommBroadcastAnnouncementMetrics.recordOperation("READ");
      expect(CommBroadcastAnnouncementMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
