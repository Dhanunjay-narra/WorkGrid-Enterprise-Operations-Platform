import { CrmCustomerHealthGrpcService } from "../../../services/core-engine/src/crm/grpc/CrmCustomerHealthGrpcService";
import { CrmCustomerHealthMetrics } from "../../../services/core-engine/src/crm/metrics/CrmCustomerHealthMetrics";

describe("CrmCustomerHealth End-to-End Enterprise Scenario", () => {
  const grpcService = new CrmCustomerHealthGrpcService();

  test("dispatches and verifies CrmCustomerHealth gRPC call", (done) => {
    grpcService.getCrmCustomerHealth({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CrmCustomerHealthMetrics.recordOperation("READ");
      expect(CrmCustomerHealthMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
