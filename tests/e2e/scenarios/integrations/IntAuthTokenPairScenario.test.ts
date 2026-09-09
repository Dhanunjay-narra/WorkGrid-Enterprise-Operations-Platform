import { IntAuthTokenPairGrpcService } from "../../../services/core-engine/src/integrations/grpc/IntAuthTokenPairGrpcService";
import { IntAuthTokenPairMetrics } from "../../../services/core-engine/src/integrations/metrics/IntAuthTokenPairMetrics";

describe("IntAuthTokenPair End-to-End Enterprise Scenario", () => {
  const grpcService = new IntAuthTokenPairGrpcService();

  test("dispatches and verifies IntAuthTokenPair gRPC call", (done) => {
    grpcService.getIntAuthTokenPair({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IntAuthTokenPairMetrics.recordOperation("READ");
      expect(IntAuthTokenPairMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
