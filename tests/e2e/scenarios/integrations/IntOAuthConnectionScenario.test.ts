import { IntOAuthConnectionGrpcService } from "../../../services/core-engine/src/integrations/grpc/IntOAuthConnectionGrpcService";
import { IntOAuthConnectionMetrics } from "../../../services/core-engine/src/integrations/metrics/IntOAuthConnectionMetrics";

describe("IntOAuthConnection End-to-End Enterprise Scenario", () => {
  const grpcService = new IntOAuthConnectionGrpcService();

  test("dispatches and verifies IntOAuthConnection gRPC call", (done) => {
    grpcService.getIntOAuthConnection({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IntOAuthConnectionMetrics.recordOperation("READ");
      expect(IntOAuthConnectionMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
