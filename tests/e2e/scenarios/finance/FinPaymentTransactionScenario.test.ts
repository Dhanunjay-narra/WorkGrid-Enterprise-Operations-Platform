import { FinPaymentTransactionGrpcService } from "../../../services/core-engine/src/finance/grpc/FinPaymentTransactionGrpcService";
import { FinPaymentTransactionMetrics } from "../../../services/core-engine/src/finance/metrics/FinPaymentTransactionMetrics";

describe("FinPaymentTransaction End-to-End Enterprise Scenario", () => {
  const grpcService = new FinPaymentTransactionGrpcService();

  test("dispatches and verifies FinPaymentTransaction gRPC call", (done) => {
    grpcService.getFinPaymentTransaction({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      FinPaymentTransactionMetrics.recordOperation("READ");
      expect(FinPaymentTransactionMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
