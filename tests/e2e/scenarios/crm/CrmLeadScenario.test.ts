import { CrmLeadGrpcService } from "../../../services/core-engine/src/crm/grpc/CrmLeadGrpcService";
import { CrmLeadMetrics } from "../../../services/core-engine/src/crm/metrics/CrmLeadMetrics";

describe("CrmLead End-to-End Enterprise Scenario", () => {
  const grpcService = new CrmLeadGrpcService();

  test("dispatches and verifies CrmLead gRPC call", (done) => {
    grpcService.getCrmLead({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CrmLeadMetrics.recordOperation("READ");
      expect(CrmLeadMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
