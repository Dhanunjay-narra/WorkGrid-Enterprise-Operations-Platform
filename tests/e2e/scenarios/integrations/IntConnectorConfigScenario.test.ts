import { IntConnectorConfigGrpcService } from "../../../services/core-engine/src/integrations/grpc/IntConnectorConfigGrpcService";
import { IntConnectorConfigMetrics } from "../../../services/core-engine/src/integrations/metrics/IntConnectorConfigMetrics";

describe("IntConnectorConfig End-to-End Enterprise Scenario", () => {
  const grpcService = new IntConnectorConfigGrpcService();

  test("dispatches and verifies IntConnectorConfig gRPC call", (done) => {
    grpcService.getIntConnectorConfig({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IntConnectorConfigMetrics.recordOperation("READ");
      expect(IntConnectorConfigMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
