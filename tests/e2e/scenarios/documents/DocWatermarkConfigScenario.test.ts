import { DocWatermarkConfigGrpcService } from "../../../services/core-engine/src/documents/grpc/DocWatermarkConfigGrpcService";
import { DocWatermarkConfigMetrics } from "../../../services/core-engine/src/documents/metrics/DocWatermarkConfigMetrics";

describe("DocWatermarkConfig End-to-End Enterprise Scenario", () => {
  const grpcService = new DocWatermarkConfigGrpcService();

  test("dispatches and verifies DocWatermarkConfig gRPC call", (done) => {
    grpcService.getDocWatermarkConfig({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      DocWatermarkConfigMetrics.recordOperation("READ");
      expect(DocWatermarkConfigMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
