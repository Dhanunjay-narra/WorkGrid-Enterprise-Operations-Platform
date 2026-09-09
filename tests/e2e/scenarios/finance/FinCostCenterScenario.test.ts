import { FinCostCenterGrpcService } from "../../../services/core-engine/src/finance/grpc/FinCostCenterGrpcService";
import { FinCostCenterMetrics } from "../../../services/core-engine/src/finance/metrics/FinCostCenterMetrics";

describe("FinCostCenter End-to-End Enterprise Scenario", () => {
  const grpcService = new FinCostCenterGrpcService();

  test("dispatches and verifies FinCostCenter gRPC call", (done) => {
    grpcService.getFinCostCenter({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      FinCostCenterMetrics.recordOperation("READ");
      expect(FinCostCenterMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
