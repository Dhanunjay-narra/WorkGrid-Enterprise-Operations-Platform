import { IntHealthCheckPingGrpcService } from "../../../services/core-engine/src/integrations/grpc/IntHealthCheckPingGrpcService";
import { IntHealthCheckPingMetrics } from "../../../services/core-engine/src/integrations/metrics/IntHealthCheckPingMetrics";

describe("IntHealthCheckPing End-to-End Enterprise Scenario", () => {
  const grpcService = new IntHealthCheckPingGrpcService();

  test("dispatches and verifies IntHealthCheckPing gRPC call", (done) => {
    grpcService.getIntHealthCheckPing({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IntHealthCheckPingMetrics.recordOperation("READ");
      expect(IntHealthCheckPingMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
