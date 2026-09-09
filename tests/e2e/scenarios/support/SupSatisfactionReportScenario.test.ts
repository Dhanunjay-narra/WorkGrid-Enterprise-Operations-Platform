import { SupSatisfactionReportGrpcService } from "../../../services/core-engine/src/support/grpc/SupSatisfactionReportGrpcService";
import { SupSatisfactionReportMetrics } from "../../../services/core-engine/src/support/metrics/SupSatisfactionReportMetrics";

describe("SupSatisfactionReport End-to-End Enterprise Scenario", () => {
  const grpcService = new SupSatisfactionReportGrpcService();

  test("dispatches and verifies SupSatisfactionReport gRPC call", (done) => {
    grpcService.getSupSatisfactionReport({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SupSatisfactionReportMetrics.recordOperation("READ");
      expect(SupSatisfactionReportMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
