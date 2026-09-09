import { FinGeneralLedgerGrpcService } from "../../../services/core-engine/src/finance/grpc/FinGeneralLedgerGrpcService";
import { FinGeneralLedgerMetrics } from "../../../services/core-engine/src/finance/metrics/FinGeneralLedgerMetrics";

describe("FinGeneralLedger End-to-End Enterprise Scenario", () => {
  const grpcService = new FinGeneralLedgerGrpcService();

  test("dispatches and verifies FinGeneralLedger gRPC call", (done) => {
    grpcService.getFinGeneralLedger({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      FinGeneralLedgerMetrics.recordOperation("READ");
      expect(FinGeneralLedgerMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
