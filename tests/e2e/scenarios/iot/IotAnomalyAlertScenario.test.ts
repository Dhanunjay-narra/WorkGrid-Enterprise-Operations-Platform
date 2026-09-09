import { IotAnomalyAlertGrpcService } from "../../../services/core-engine/src/iot/grpc/IotAnomalyAlertGrpcService";
import { IotAnomalyAlertMetrics } from "../../../services/core-engine/src/iot/metrics/IotAnomalyAlertMetrics";

describe("IotAnomalyAlert End-to-End Enterprise Scenario", () => {
  const grpcService = new IotAnomalyAlertGrpcService();

  test("dispatches and verifies IotAnomalyAlert gRPC call", (done) => {
    grpcService.getIotAnomalyAlert({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IotAnomalyAlertMetrics.recordOperation("READ");
      expect(IotAnomalyAlertMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
