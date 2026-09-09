import { CommMentionRecordGrpcService } from "../../../services/core-engine/src/communication/grpc/CommMentionRecordGrpcService";
import { CommMentionRecordMetrics } from "../../../services/core-engine/src/communication/metrics/CommMentionRecordMetrics";

describe("CommMentionRecord End-to-End Enterprise Scenario", () => {
  const grpcService = new CommMentionRecordGrpcService();

  test("dispatches and verifies CommMentionRecord gRPC call", (done) => {
    grpcService.getCommMentionRecord({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CommMentionRecordMetrics.recordOperation("READ");
      expect(CommMentionRecordMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
