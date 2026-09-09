import { CommAttachmentFileGrpcService } from "../../../services/core-engine/src/communication/grpc/CommAttachmentFileGrpcService";
import { CommAttachmentFileMetrics } from "../../../services/core-engine/src/communication/metrics/CommAttachmentFileMetrics";

describe("CommAttachmentFile End-to-End Enterprise Scenario", () => {
  const grpcService = new CommAttachmentFileGrpcService();

  test("dispatches and verifies CommAttachmentFile gRPC call", (done) => {
    grpcService.getCommAttachmentFile({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CommAttachmentFileMetrics.recordOperation("READ");
      expect(CommAttachmentFileMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
