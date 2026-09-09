import { FinLedgerAccountGrpcService } from "../../../services/core-engine/src/finance/grpc/FinLedgerAccountGrpcService";
import { FinLedgerAccountMetrics } from "../../../services/core-engine/src/finance/metrics/FinLedgerAccountMetrics";

describe("FinLedgerAccount End-to-End Enterprise Scenario", () => {
  const grpcService = new FinLedgerAccountGrpcService();

  test("dispatches and verifies FinLedgerAccount gRPC call", (done) => {
    grpcService.getFinLedgerAccount({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      FinLedgerAccountMetrics.recordOperation("READ");
      expect(FinLedgerAccountMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
