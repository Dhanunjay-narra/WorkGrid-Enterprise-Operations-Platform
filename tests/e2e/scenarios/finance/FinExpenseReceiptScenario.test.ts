import { FinExpenseReceiptGrpcService } from "../../../services/core-engine/src/finance/grpc/FinExpenseReceiptGrpcService";
import { FinExpenseReceiptMetrics } from "../../../services/core-engine/src/finance/metrics/FinExpenseReceiptMetrics";

describe("FinExpenseReceipt End-to-End Enterprise Scenario", () => {
  const grpcService = new FinExpenseReceiptGrpcService();

  test("dispatches and verifies FinExpenseReceipt gRPC call", (done) => {
    grpcService.getFinExpenseReceipt({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      FinExpenseReceiptMetrics.recordOperation("READ");
      expect(FinExpenseReceiptMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
