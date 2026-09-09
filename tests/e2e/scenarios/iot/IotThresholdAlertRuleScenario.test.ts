import { IotThresholdAlertRuleGrpcService } from "../../../services/core-engine/src/iot/grpc/IotThresholdAlertRuleGrpcService";
import { IotThresholdAlertRuleMetrics } from "../../../services/core-engine/src/iot/metrics/IotThresholdAlertRuleMetrics";

describe("IotThresholdAlertRule End-to-End Enterprise Scenario", () => {
  const grpcService = new IotThresholdAlertRuleGrpcService();

  test("dispatches and verifies IotThresholdAlertRule gRPC call", (done) => {
    grpcService.getIotThresholdAlertRule({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IotThresholdAlertRuleMetrics.recordOperation("READ");
      expect(IotThresholdAlertRuleMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
