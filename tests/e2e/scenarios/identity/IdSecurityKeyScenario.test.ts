import { IdSecurityKeyGrpcService } from "../../../services/core-engine/src/identity/grpc/IdSecurityKeyGrpcService";
import { IdSecurityKeyMetrics } from "../../../services/core-engine/src/identity/metrics/IdSecurityKeyMetrics";

describe("IdSecurityKey End-to-End Enterprise Scenario", () => {
  const grpcService = new IdSecurityKeyGrpcService();

  test("dispatches and verifies IdSecurityKey gRPC call", (done) => {
    grpcService.getIdSecurityKey({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IdSecurityKeyMetrics.recordOperation("READ");
      expect(IdSecurityKeyMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
