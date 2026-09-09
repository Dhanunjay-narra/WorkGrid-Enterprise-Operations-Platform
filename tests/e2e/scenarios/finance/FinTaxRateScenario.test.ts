import { FinTaxRateGrpcService } from "../../../services/core-engine/src/finance/grpc/FinTaxRateGrpcService";
import { FinTaxRateMetrics } from "../../../services/core-engine/src/finance/metrics/FinTaxRateMetrics";

describe("FinTaxRate End-to-End Enterprise Scenario", () => {
  const grpcService = new FinTaxRateGrpcService();

  test("dispatches and verifies FinTaxRate gRPC call", (done) => {
    grpcService.getFinTaxRate({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      FinTaxRateMetrics.recordOperation("READ");
      expect(FinTaxRateMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
