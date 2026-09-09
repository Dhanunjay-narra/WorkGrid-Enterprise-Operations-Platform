import { CommThreadReplyGrpcService } from "../../../services/core-engine/src/communication/grpc/CommThreadReplyGrpcService";
import { CommThreadReplyMetrics } from "../../../services/core-engine/src/communication/metrics/CommThreadReplyMetrics";

describe("CommThreadReply End-to-End Enterprise Scenario", () => {
  const grpcService = new CommThreadReplyGrpcService();

  test("dispatches and verifies CommThreadReply gRPC call", (done) => {
    grpcService.getCommThreadReply({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CommThreadReplyMetrics.recordOperation("READ");
      expect(CommThreadReplyMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
