import { FinFinancialForecastGrpcService } from "../../../services/core-engine/src/finance/grpc/FinFinancialForecastGrpcService";
import { FinFinancialForecastMetrics } from "../../../services/core-engine/src/finance/metrics/FinFinancialForecastMetrics";

describe("FinFinancialForecast End-to-End Enterprise Scenario", () => {
  const grpcService = new FinFinancialForecastGrpcService();

  test("dispatches and verifies FinFinancialForecast gRPC call", (done) => {
    grpcService.getFinFinancialForecast({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      FinFinancialForecastMetrics.recordOperation("READ");
      expect(FinFinancialForecastMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
