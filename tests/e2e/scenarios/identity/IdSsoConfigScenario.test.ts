import { IdSsoConfigGrpcService } from "../../../services/core-engine/src/identity/grpc/IdSsoConfigGrpcService";
import { IdSsoConfigMetrics } from "../../../services/core-engine/src/identity/metrics/IdSsoConfigMetrics";

describe("IdSsoConfig End-to-End Enterprise Scenario", () => {
  const grpcService = new IdSsoConfigGrpcService();

  test("dispatches and verifies IdSsoConfig gRPC call", (done) => {
    grpcService.getIdSsoConfig({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IdSsoConfigMetrics.recordOperation("READ");
      expect(IdSsoConfigMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
