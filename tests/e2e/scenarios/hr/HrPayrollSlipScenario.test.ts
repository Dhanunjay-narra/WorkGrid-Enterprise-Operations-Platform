import { HrPayrollSlipGrpcService } from "../../../services/core-engine/src/hr/grpc/HrPayrollSlipGrpcService";
import { HrPayrollSlipMetrics } from "../../../services/core-engine/src/hr/metrics/HrPayrollSlipMetrics";

describe("HrPayrollSlip End-to-End Enterprise Scenario", () => {
  const grpcService = new HrPayrollSlipGrpcService();

  test("dispatches and verifies HrPayrollSlip gRPC call", (done) => {
    grpcService.getHrPayrollSlip({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      HrPayrollSlipMetrics.recordOperation("READ");
      expect(HrPayrollSlipMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
