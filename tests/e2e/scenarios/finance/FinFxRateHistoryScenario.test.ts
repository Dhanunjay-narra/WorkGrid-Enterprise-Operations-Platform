import { FinFxRateHistoryGrpcService } from "../../../services/core-engine/src/finance/grpc/FinFxRateHistoryGrpcService";
import { FinFxRateHistoryMetrics } from "../../../services/core-engine/src/finance/metrics/FinFxRateHistoryMetrics";

describe("FinFxRateHistory End-to-End Enterprise Scenario", () => {
  const grpcService = new FinFxRateHistoryGrpcService();

  test("dispatches and verifies FinFxRateHistory gRPC call", (done) => {
    grpcService.getFinFxRateHistory({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      FinFxRateHistoryMetrics.recordOperation("READ");
      expect(FinFxRateHistoryMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
