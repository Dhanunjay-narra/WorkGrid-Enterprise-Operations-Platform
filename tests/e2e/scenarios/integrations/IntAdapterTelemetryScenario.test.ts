import { IntAdapterTelemetryGrpcService } from "../../../services/core-engine/src/integrations/grpc/IntAdapterTelemetryGrpcService";
import { IntAdapterTelemetryMetrics } from "../../../services/core-engine/src/integrations/metrics/IntAdapterTelemetryMetrics";

describe("IntAdapterTelemetry End-to-End Enterprise Scenario", () => {
  const grpcService = new IntAdapterTelemetryGrpcService();

  test("dispatches and verifies IntAdapterTelemetry gRPC call", (done) => {
    grpcService.getIntAdapterTelemetry({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IntAdapterTelemetryMetrics.recordOperation("READ");
      expect(IntAdapterTelemetryMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
