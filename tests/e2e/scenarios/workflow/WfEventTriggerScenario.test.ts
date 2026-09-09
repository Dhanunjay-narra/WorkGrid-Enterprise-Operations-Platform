import { WfEventTriggerGrpcService } from "../../../services/core-engine/src/workflow/grpc/WfEventTriggerGrpcService";
import { WfEventTriggerMetrics } from "../../../services/core-engine/src/workflow/metrics/WfEventTriggerMetrics";

describe("WfEventTrigger End-to-End Enterprise Scenario", () => {
  const grpcService = new WfEventTriggerGrpcService();

  test("dispatches and verifies WfEventTrigger gRPC call", (done) => {
    grpcService.getWfEventTrigger({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      WfEventTriggerMetrics.recordOperation("READ");
      expect(WfEventTriggerMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
