import { AiTokenUsageRecordGrpcService } from "../../../services/core-engine/src/ai/grpc/AiTokenUsageRecordGrpcService";
import { AiTokenUsageRecordMetrics } from "../../../services/core-engine/src/ai/metrics/AiTokenUsageRecordMetrics";

describe("AiTokenUsageRecord End-to-End Enterprise Scenario", () => {
  const grpcService = new AiTokenUsageRecordGrpcService();

  test("dispatches and verifies AiTokenUsageRecord gRPC call", (done) => {
    grpcService.getAiTokenUsageRecord({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      AiTokenUsageRecordMetrics.recordOperation("READ");
      expect(AiTokenUsageRecordMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
