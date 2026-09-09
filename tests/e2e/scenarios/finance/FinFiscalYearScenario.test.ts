import { FinFiscalYearGrpcService } from "../../../services/core-engine/src/finance/grpc/FinFiscalYearGrpcService";
import { FinFiscalYearMetrics } from "../../../services/core-engine/src/finance/metrics/FinFiscalYearMetrics";

describe("FinFiscalYear End-to-End Enterprise Scenario", () => {
  const grpcService = new FinFiscalYearGrpcService();

  test("dispatches and verifies FinFiscalYear gRPC call", (done) => {
    grpcService.getFinFiscalYear({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      FinFiscalYearMetrics.recordOperation("READ");
      expect(FinFiscalYearMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
