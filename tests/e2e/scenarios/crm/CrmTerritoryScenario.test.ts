import { CrmTerritoryGrpcService } from "../../../services/core-engine/src/crm/grpc/CrmTerritoryGrpcService";
import { CrmTerritoryMetrics } from "../../../services/core-engine/src/crm/metrics/CrmTerritoryMetrics";

describe("CrmTerritory End-to-End Enterprise Scenario", () => {
  const grpcService = new CrmTerritoryGrpcService();

  test("dispatches and verifies CrmTerritory gRPC call", (done) => {
    grpcService.getCrmTerritory({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CrmTerritoryMetrics.recordOperation("READ");
      expect(CrmTerritoryMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
