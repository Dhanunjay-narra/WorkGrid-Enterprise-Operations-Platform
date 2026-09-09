import { HrShiftGrpcService } from "../../../services/core-engine/src/hr/grpc/HrShiftGrpcService";
import { HrShiftMetrics } from "../../../services/core-engine/src/hr/metrics/HrShiftMetrics";

describe("HrShift End-to-End Enterprise Scenario", () => {
  const grpcService = new HrShiftGrpcService();

  test("dispatches and verifies HrShift gRPC call", (done) => {
    grpcService.getHrShift({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      HrShiftMetrics.recordOperation("READ");
      expect(HrShiftMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
