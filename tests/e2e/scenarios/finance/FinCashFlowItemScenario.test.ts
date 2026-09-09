import { FinCashFlowItemGrpcService } from "../../../services/core-engine/src/finance/grpc/FinCashFlowItemGrpcService";
import { FinCashFlowItemMetrics } from "../../../services/core-engine/src/finance/metrics/FinCashFlowItemMetrics";

describe("FinCashFlowItem End-to-End Enterprise Scenario", () => {
  const grpcService = new FinCashFlowItemGrpcService();

  test("dispatches and verifies FinCashFlowItem gRPC call", (done) => {
    grpcService.getFinCashFlowItem({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      FinCashFlowItemMetrics.recordOperation("READ");
      expect(FinCashFlowItemMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
