import { HrInterviewStageGrpcService } from "../../../services/core-engine/src/hr/grpc/HrInterviewStageGrpcService";
import { HrInterviewStageMetrics } from "../../../services/core-engine/src/hr/metrics/HrInterviewStageMetrics";

describe("HrInterviewStage End-to-End Enterprise Scenario", () => {
  const grpcService = new HrInterviewStageGrpcService();

  test("dispatches and verifies HrInterviewStage gRPC call", (done) => {
    grpcService.getHrInterviewStage({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      HrInterviewStageMetrics.recordOperation("READ");
      expect(HrInterviewStageMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
