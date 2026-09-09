import { SupRoutingConditionGrpcService } from "../../../services/core-engine/src/support/grpc/SupRoutingConditionGrpcService";
import { SupRoutingConditionMetrics } from "../../../services/core-engine/src/support/metrics/SupRoutingConditionMetrics";

describe("SupRoutingCondition End-to-End Enterprise Scenario", () => {
  const grpcService = new SupRoutingConditionGrpcService();

  test("dispatches and verifies SupRoutingCondition gRPC call", (done) => {
    grpcService.getSupRoutingCondition({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SupRoutingConditionMetrics.recordOperation("READ");
      expect(SupRoutingConditionMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
