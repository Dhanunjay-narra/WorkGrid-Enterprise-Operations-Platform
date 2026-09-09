import { CrmSalesContractGrpcService } from "../../../services/core-engine/src/crm/grpc/CrmSalesContractGrpcService";
import { CrmSalesContractMetrics } from "../../../services/core-engine/src/crm/metrics/CrmSalesContractMetrics";

describe("CrmSalesContract End-to-End Enterprise Scenario", () => {
  const grpcService = new CrmSalesContractGrpcService();

  test("dispatches and verifies CrmSalesContract gRPC call", (done) => {
    grpcService.getCrmSalesContract({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CrmSalesContractMetrics.recordOperation("READ");
      expect(CrmSalesContractMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
