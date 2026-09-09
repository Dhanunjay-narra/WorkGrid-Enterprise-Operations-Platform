import { HrSkillMatrixGrpcService } from "../../../services/core-engine/src/hr/grpc/HrSkillMatrixGrpcService";
import { HrSkillMatrixMetrics } from "../../../services/core-engine/src/hr/metrics/HrSkillMatrixMetrics";

describe("HrSkillMatrix End-to-End Enterprise Scenario", () => {
  const grpcService = new HrSkillMatrixGrpcService();

  test("dispatches and verifies HrSkillMatrix gRPC call", (done) => {
    grpcService.getHrSkillMatrix({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      HrSkillMatrixMetrics.recordOperation("READ");
      expect(HrSkillMatrixMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
