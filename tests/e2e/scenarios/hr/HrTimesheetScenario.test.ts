import { HrTimesheetGrpcService } from "../../../services/core-engine/src/hr/grpc/HrTimesheetGrpcService";
import { HrTimesheetMetrics } from "../../../services/core-engine/src/hr/metrics/HrTimesheetMetrics";

describe("HrTimesheet End-to-End Enterprise Scenario", () => {
  const grpcService = new HrTimesheetGrpcService();

  test("dispatches and verifies HrTimesheet gRPC call", (done) => {
    grpcService.getHrTimesheet({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      HrTimesheetMetrics.recordOperation("READ");
      expect(HrTimesheetMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
