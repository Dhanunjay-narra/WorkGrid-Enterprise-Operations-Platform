import { CrmCompetitorIntelGrpcService } from "../../../services/core-engine/src/crm/grpc/CrmCompetitorIntelGrpcService";
import { CrmCompetitorIntelMetrics } from "../../../services/core-engine/src/crm/metrics/CrmCompetitorIntelMetrics";

describe("CrmCompetitorIntel End-to-End Enterprise Scenario", () => {
  const grpcService = new CrmCompetitorIntelGrpcService();

  test("dispatches and verifies CrmCompetitorIntel gRPC call", (done) => {
    grpcService.getCrmCompetitorIntel({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CrmCompetitorIntelMetrics.recordOperation("READ");
      expect(CrmCompetitorIntelMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
