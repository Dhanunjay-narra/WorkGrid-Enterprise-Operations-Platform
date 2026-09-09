import { HrDepartmentGrpcService } from "../../../services/core-engine/src/hr/grpc/HrDepartmentGrpcService";
import { HrDepartmentMetrics } from "../../../services/core-engine/src/hr/metrics/HrDepartmentMetrics";

describe("HrDepartment End-to-End Enterprise Scenario", () => {
  const grpcService = new HrDepartmentGrpcService();

  test("dispatches and verifies HrDepartment gRPC call", (done) => {
    grpcService.getHrDepartment({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      HrDepartmentMetrics.recordOperation("READ");
      expect(HrDepartmentMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
