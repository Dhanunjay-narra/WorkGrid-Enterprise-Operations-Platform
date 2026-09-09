import { IdMfaConfigGrpcService } from "../../../services/core-engine/src/identity/grpc/IdMfaConfigGrpcService";
import { IdMfaConfigMetrics } from "../../../services/core-engine/src/identity/metrics/IdMfaConfigMetrics";

describe("IdMfaConfig End-to-End Enterprise Scenario", () => {
  const grpcService = new IdMfaConfigGrpcService();

  test("dispatches and verifies IdMfaConfig gRPC call", (done) => {
    grpcService.getIdMfaConfig({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IdMfaConfigMetrics.recordOperation("READ");
      expect(IdMfaConfigMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
