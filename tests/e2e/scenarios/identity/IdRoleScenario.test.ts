import { IdRoleGrpcService } from "../../../services/core-engine/src/identity/grpc/IdRoleGrpcService";
import { IdRoleMetrics } from "../../../services/core-engine/src/identity/metrics/IdRoleMetrics";

describe("IdRole End-to-End Enterprise Scenario", () => {
  const grpcService = new IdRoleGrpcService();

  test("dispatches and verifies IdRole gRPC call", (done) => {
    grpcService.getIdRole({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IdRoleMetrics.recordOperation("READ");
      expect(IdRoleMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
