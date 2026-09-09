import { BiReportQueryGrpcService } from "../../../services/core-engine/src/analytics/grpc/BiReportQueryGrpcService";
import { BiReportQueryMetrics } from "../../../services/core-engine/src/analytics/metrics/BiReportQueryMetrics";

describe("BiReportQuery End-to-End Enterprise Scenario", () => {
  const grpcService = new BiReportQueryGrpcService();

  test("dispatches and verifies BiReportQuery gRPC call", (done) => {
    grpcService.getBiReportQuery({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      BiReportQueryMetrics.recordOperation("READ");
      expect(BiReportQueryMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
