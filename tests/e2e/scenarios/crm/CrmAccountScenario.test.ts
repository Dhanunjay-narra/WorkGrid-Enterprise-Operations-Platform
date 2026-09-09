import { CrmAccountGrpcService } from "../../../services/core-engine/src/crm/grpc/CrmAccountGrpcService";
import { CrmAccountMetrics } from "../../../services/core-engine/src/crm/metrics/CrmAccountMetrics";

describe("CrmAccount End-to-End Enterprise Scenario", () => {
  const grpcService = new CrmAccountGrpcService();

  test("dispatches and verifies CrmAccount gRPC call", (done) => {
    grpcService.getCrmAccount({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CrmAccountMetrics.recordOperation("READ");
      expect(CrmAccountMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
