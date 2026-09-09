import { CrmStageGrpcService } from "../../../services/core-engine/src/crm/grpc/CrmStageGrpcService";
import { CrmStageMetrics } from "../../../services/core-engine/src/crm/metrics/CrmStageMetrics";

describe("CrmStage End-to-End Enterprise Scenario", () => {
  const grpcService = new CrmStageGrpcService();

  test("dispatches and verifies CrmStage gRPC call", (done) => {
    grpcService.getCrmStage({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CrmStageMetrics.recordOperation("READ");
      expect(CrmStageMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
