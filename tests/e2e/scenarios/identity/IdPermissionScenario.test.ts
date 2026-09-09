import { IdPermissionGrpcService } from "../../../services/core-engine/src/identity/grpc/IdPermissionGrpcService";
import { IdPermissionMetrics } from "../../../services/core-engine/src/identity/metrics/IdPermissionMetrics";

describe("IdPermission End-to-End Enterprise Scenario", () => {
  const grpcService = new IdPermissionGrpcService();

  test("dispatches and verifies IdPermission gRPC call", (done) => {
    grpcService.getIdPermission({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IdPermissionMetrics.recordOperation("READ");
      expect(IdPermissionMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
