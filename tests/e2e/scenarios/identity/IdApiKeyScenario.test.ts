import { IdApiKeyGrpcService } from "../../../services/core-engine/src/identity/grpc/IdApiKeyGrpcService";
import { IdApiKeyMetrics } from "../../../services/core-engine/src/identity/metrics/IdApiKeyMetrics";

describe("IdApiKey End-to-End Enterprise Scenario", () => {
  const grpcService = new IdApiKeyGrpcService();

  test("dispatches and verifies IdApiKey gRPC call", (done) => {
    grpcService.getIdApiKey({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IdApiKeyMetrics.recordOperation("READ");
      expect(IdApiKeyMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
