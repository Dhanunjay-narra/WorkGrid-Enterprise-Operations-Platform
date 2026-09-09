import { SecSecretMetadataGrpcService } from "../../../services/core-engine/src/security/grpc/SecSecretMetadataGrpcService";
import { SecSecretMetadataMetrics } from "../../../services/core-engine/src/security/metrics/SecSecretMetadataMetrics";

describe("SecSecretMetadata End-to-End Enterprise Scenario", () => {
  const grpcService = new SecSecretMetadataGrpcService();

  test("dispatches and verifies SecSecretMetadata gRPC call", (done) => {
    grpcService.getSecSecretMetadata({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SecSecretMetadataMetrics.recordOperation("READ");
      expect(SecSecretMetadataMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
