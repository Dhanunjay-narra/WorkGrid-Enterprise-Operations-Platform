import { IdTenantGrpcService } from "../../../services/core-engine/src/identity/grpc/IdTenantGrpcService";
import { IdTenantMetrics } from "../../../services/core-engine/src/identity/metrics/IdTenantMetrics";

describe("IdTenant End-to-End Enterprise Scenario", () => {
  const grpcService = new IdTenantGrpcService();

  test("dispatches and verifies IdTenant gRPC call", (done) => {
    grpcService.getIdTenant({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IdTenantMetrics.recordOperation("READ");
      expect(IdTenantMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
