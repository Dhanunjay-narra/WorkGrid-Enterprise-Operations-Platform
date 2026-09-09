import { HrLeavePolicyGrpcService } from "../../../services/core-engine/src/hr/grpc/HrLeavePolicyGrpcService";
import { HrLeavePolicyMetrics } from "../../../services/core-engine/src/hr/metrics/HrLeavePolicyMetrics";

describe("HrLeavePolicy End-to-End Enterprise Scenario", () => {
  const grpcService = new HrLeavePolicyGrpcService();

  test("dispatches and verifies HrLeavePolicy gRPC call", (done) => {
    grpcService.getHrLeavePolicy({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      HrLeavePolicyMetrics.recordOperation("READ");
      expect(HrLeavePolicyMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
