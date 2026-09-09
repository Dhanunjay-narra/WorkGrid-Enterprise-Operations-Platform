import { CrmSalesQuotaGrpcService } from "../../../services/core-engine/src/crm/grpc/CrmSalesQuotaGrpcService";
import { CrmSalesQuotaMetrics } from "../../../services/core-engine/src/crm/metrics/CrmSalesQuotaMetrics";

describe("CrmSalesQuota End-to-End Enterprise Scenario", () => {
  const grpcService = new CrmSalesQuotaGrpcService();

  test("dispatches and verifies CrmSalesQuota gRPC call", (done) => {
    grpcService.getCrmSalesQuota({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CrmSalesQuotaMetrics.recordOperation("READ");
      expect(CrmSalesQuotaMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
