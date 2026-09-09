import { CrmMeetingGrpcService } from "../../../services/core-engine/src/crm/grpc/CrmMeetingGrpcService";
import { CrmMeetingMetrics } from "../../../services/core-engine/src/crm/metrics/CrmMeetingMetrics";

describe("CrmMeeting End-to-End Enterprise Scenario", () => {
  const grpcService = new CrmMeetingGrpcService();

  test("dispatches and verifies CrmMeeting gRPC call", (done) => {
    grpcService.getCrmMeeting({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CrmMeetingMetrics.recordOperation("READ");
      expect(CrmMeetingMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
