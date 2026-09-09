import { CrmLeadScoreGrpcService } from "../../../services/core-engine/src/crm/grpc/CrmLeadScoreGrpcService";
import { CrmLeadScoreMetrics } from "../../../services/core-engine/src/crm/metrics/CrmLeadScoreMetrics";

describe("CrmLeadScore End-to-End Enterprise Scenario", () => {
  const grpcService = new CrmLeadScoreGrpcService();

  test("dispatches and verifies CrmLeadScore gRPC call", (done) => {
    grpcService.getCrmLeadScore({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CrmLeadScoreMetrics.recordOperation("READ");
      expect(CrmLeadScoreMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
