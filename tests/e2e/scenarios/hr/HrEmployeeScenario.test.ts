import { HrEmployeeGrpcService } from "../../../services/core-engine/src/hr/grpc/HrEmployeeGrpcService";
import { HrEmployeeMetrics } from "../../../services/core-engine/src/hr/metrics/HrEmployeeMetrics";

describe("HrEmployee End-to-End Enterprise Scenario", () => {
  const grpcService = new HrEmployeeGrpcService();

  test("dispatches and verifies HrEmployee gRPC call", (done) => {
    grpcService.getHrEmployee({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      HrEmployeeMetrics.recordOperation("READ");
      expect(HrEmployeeMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
