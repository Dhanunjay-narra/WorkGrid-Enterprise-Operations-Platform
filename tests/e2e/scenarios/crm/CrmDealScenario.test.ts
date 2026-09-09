import { CrmDealGrpcService } from "../../../services/core-engine/src/crm/grpc/CrmDealGrpcService";
import { CrmDealMetrics } from "../../../services/core-engine/src/crm/metrics/CrmDealMetrics";

describe("CrmDeal End-to-End Enterprise Scenario", () => {
  const grpcService = new CrmDealGrpcService();

  test("dispatches and verifies CrmDeal gRPC call", (done) => {
    grpcService.getCrmDeal({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CrmDealMetrics.recordOperation("READ");
      expect(CrmDealMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
