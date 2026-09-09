import { IotTelemetryPacketGrpcService } from "../../../services/core-engine/src/iot/grpc/IotTelemetryPacketGrpcService";
import { IotTelemetryPacketMetrics } from "../../../services/core-engine/src/iot/metrics/IotTelemetryPacketMetrics";

describe("IotTelemetryPacket End-to-End Enterprise Scenario", () => {
  const grpcService = new IotTelemetryPacketGrpcService();

  test("dispatches and verifies IotTelemetryPacket gRPC call", (done) => {
    grpcService.getIotTelemetryPacket({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IotTelemetryPacketMetrics.recordOperation("READ");
      expect(IotTelemetryPacketMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
