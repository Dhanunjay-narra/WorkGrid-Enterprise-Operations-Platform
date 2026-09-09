import { BiExecutiveSummaryGrpcService } from "../../../services/core-engine/src/analytics/grpc/BiExecutiveSummaryGrpcService";
import { BiExecutiveSummaryMetrics } from "../../../services/core-engine/src/analytics/metrics/BiExecutiveSummaryMetrics";

describe("BiExecutiveSummary End-to-End Enterprise Scenario", () => {
  const grpcService = new BiExecutiveSummaryGrpcService();

  test("dispatches and verifies BiExecutiveSummary gRPC call", (done) => {
    grpcService.getBiExecutiveSummary({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      BiExecutiveSummaryMetrics.recordOperation("READ");
      expect(BiExecutiveSummaryMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
