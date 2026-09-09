import { DocRetentionScheduleGrpcService } from "../../../services/core-engine/src/documents/grpc/DocRetentionScheduleGrpcService";
import { DocRetentionScheduleMetrics } from "../../../services/core-engine/src/documents/metrics/DocRetentionScheduleMetrics";

describe("DocRetentionSchedule End-to-End Enterprise Scenario", () => {
  const grpcService = new DocRetentionScheduleGrpcService();

  test("dispatches and verifies DocRetentionSchedule gRPC call", (done) => {
    grpcService.getDocRetentionSchedule({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      DocRetentionScheduleMetrics.recordOperation("READ");
      expect(DocRetentionScheduleMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
