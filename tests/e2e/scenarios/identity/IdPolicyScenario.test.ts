import { IdPolicyGrpcService } from "../../../services/core-engine/src/identity/grpc/IdPolicyGrpcService";
import { IdPolicyMetrics } from "../../../services/core-engine/src/identity/metrics/IdPolicyMetrics";

describe("IdPolicy End-to-End Enterprise Scenario", () => {
  const grpcService = new IdPolicyGrpcService();

  test("dispatches and verifies IdPolicy gRPC call", (done) => {
    grpcService.getIdPolicy({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IdPolicyMetrics.recordOperation("READ");
      expect(IdPolicyMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
