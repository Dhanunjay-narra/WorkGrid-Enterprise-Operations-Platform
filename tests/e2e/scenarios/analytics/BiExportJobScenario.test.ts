import { BiExportJobGrpcService } from "../../../services/core-engine/src/analytics/grpc/BiExportJobGrpcService";
import { BiExportJobMetrics } from "../../../services/core-engine/src/analytics/metrics/BiExportJobMetrics";

describe("BiExportJob End-to-End Enterprise Scenario", () => {
  const grpcService = new BiExportJobGrpcService();

  test("dispatches and verifies BiExportJob gRPC call", (done) => {
    grpcService.getBiExportJob({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      BiExportJobMetrics.recordOperation("READ");
      expect(BiExportJobMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
