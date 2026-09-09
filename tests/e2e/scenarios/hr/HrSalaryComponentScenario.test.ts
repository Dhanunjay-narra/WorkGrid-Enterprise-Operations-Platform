import { HrSalaryComponentGrpcService } from "../../../services/core-engine/src/hr/grpc/HrSalaryComponentGrpcService";
import { HrSalaryComponentMetrics } from "../../../services/core-engine/src/hr/metrics/HrSalaryComponentMetrics";

describe("HrSalaryComponent End-to-End Enterprise Scenario", () => {
  const grpcService = new HrSalaryComponentGrpcService();

  test("dispatches and verifies HrSalaryComponent gRPC call", (done) => {
    grpcService.getHrSalaryComponent({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      HrSalaryComponentMetrics.recordOperation("READ");
      expect(HrSalaryComponentMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
