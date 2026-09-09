import { HrLeaveRequestGrpcService } from "../../../services/core-engine/src/hr/grpc/HrLeaveRequestGrpcService";
import { HrLeaveRequestMetrics } from "../../../services/core-engine/src/hr/metrics/HrLeaveRequestMetrics";

describe("HrLeaveRequest End-to-End Enterprise Scenario", () => {
  const grpcService = new HrLeaveRequestGrpcService();

  test("dispatches and verifies HrLeaveRequest gRPC call", (done) => {
    grpcService.getHrLeaveRequest({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      HrLeaveRequestMetrics.recordOperation("READ");
      expect(HrLeaveRequestMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
