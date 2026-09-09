import { BiReportScheduleGrpcService } from "../../../services/core-engine/src/analytics/grpc/BiReportScheduleGrpcService";
import { BiReportScheduleMetrics } from "../../../services/core-engine/src/analytics/metrics/BiReportScheduleMetrics";

describe("BiReportSchedule End-to-End Enterprise Scenario", () => {
  const grpcService = new BiReportScheduleGrpcService();

  test("dispatches and verifies BiReportSchedule gRPC call", (done) => {
    grpcService.getBiReportSchedule({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      BiReportScheduleMetrics.recordOperation("READ");
      expect(BiReportScheduleMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
