import { HrTaxDeductionGrpcService } from "../../../services/core-engine/src/hr/grpc/HrTaxDeductionGrpcService";
import { HrTaxDeductionMetrics } from "../../../services/core-engine/src/hr/metrics/HrTaxDeductionMetrics";

describe("HrTaxDeduction End-to-End Enterprise Scenario", () => {
  const grpcService = new HrTaxDeductionGrpcService();

  test("dispatches and verifies HrTaxDeduction gRPC call", (done) => {
    grpcService.getHrTaxDeduction({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      HrTaxDeductionMetrics.recordOperation("READ");
      expect(HrTaxDeductionMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
