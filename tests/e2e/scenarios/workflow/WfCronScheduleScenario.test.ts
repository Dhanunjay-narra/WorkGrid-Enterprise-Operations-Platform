import { WfCronScheduleGrpcService } from "../../../services/core-engine/src/workflow/grpc/WfCronScheduleGrpcService";
import { WfCronScheduleMetrics } from "../../../services/core-engine/src/workflow/metrics/WfCronScheduleMetrics";

describe("WfCronSchedule End-to-End Enterprise Scenario", () => {
  const grpcService = new WfCronScheduleGrpcService();

  test("dispatches and verifies WfCronSchedule gRPC call", (done) => {
    grpcService.getWfCronSchedule({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      WfCronScheduleMetrics.recordOperation("READ");
      expect(WfCronScheduleMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
