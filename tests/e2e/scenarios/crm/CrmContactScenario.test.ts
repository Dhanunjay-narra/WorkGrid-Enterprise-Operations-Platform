import { CrmContactGrpcService } from "../../../services/core-engine/src/crm/grpc/CrmContactGrpcService";
import { CrmContactMetrics } from "../../../services/core-engine/src/crm/metrics/CrmContactMetrics";

describe("CrmContact End-to-End Enterprise Scenario", () => {
  const grpcService = new CrmContactGrpcService();

  test("dispatches and verifies CrmContact gRPC call", (done) => {
    grpcService.getCrmContact({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CrmContactMetrics.recordOperation("READ");
      expect(CrmContactMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
