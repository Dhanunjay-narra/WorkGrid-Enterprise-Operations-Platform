import { DocOcrExtractedDataGrpcService } from "../../../services/core-engine/src/documents/grpc/DocOcrExtractedDataGrpcService";
import { DocOcrExtractedDataMetrics } from "../../../services/core-engine/src/documents/metrics/DocOcrExtractedDataMetrics";

describe("DocOcrExtractedData End-to-End Enterprise Scenario", () => {
  const grpcService = new DocOcrExtractedDataGrpcService();

  test("dispatches and verifies DocOcrExtractedData gRPC call", (done) => {
    grpcService.getDocOcrExtractedData({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      DocOcrExtractedDataMetrics.recordOperation("READ");
      expect(DocOcrExtractedDataMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
