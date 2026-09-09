import { FinBankReconciliationGrpcService } from "../../../services/core-engine/src/finance/grpc/FinBankReconciliationGrpcService";
import { FinBankReconciliationMetrics } from "../../../services/core-engine/src/finance/metrics/FinBankReconciliationMetrics";

describe("FinBankReconciliation End-to-End Enterprise Scenario", () => {
  const grpcService = new FinBankReconciliationGrpcService();

  test("dispatches and verifies FinBankReconciliation gRPC call", (done) => {
    grpcService.getFinBankReconciliation({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      FinBankReconciliationMetrics.recordOperation("READ");
      expect(FinBankReconciliationMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
