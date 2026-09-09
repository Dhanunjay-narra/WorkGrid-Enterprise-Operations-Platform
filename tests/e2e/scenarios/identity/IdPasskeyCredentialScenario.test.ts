import { IdPasskeyCredentialGrpcService } from "../../../services/core-engine/src/identity/grpc/IdPasskeyCredentialGrpcService";
import { IdPasskeyCredentialMetrics } from "../../../services/core-engine/src/identity/metrics/IdPasskeyCredentialMetrics";

describe("IdPasskeyCredential End-to-End Enterprise Scenario", () => {
  const grpcService = new IdPasskeyCredentialGrpcService();

  test("dispatches and verifies IdPasskeyCredential gRPC call", (done) => {
    grpcService.getIdPasskeyCredential({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IdPasskeyCredentialMetrics.recordOperation("READ");
      expect(IdPasskeyCredentialMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
