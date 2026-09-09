import { AiToolCallRecordGrpcService } from "../../../services/core-engine/src/ai/grpc/AiToolCallRecordGrpcService";
import { AiToolCallRecordMetrics } from "../../../services/core-engine/src/ai/metrics/AiToolCallRecordMetrics";

describe("AiToolCallRecord End-to-End Enterprise Scenario", () => {
  const grpcService = new AiToolCallRecordGrpcService();

  test("dispatches and verifies AiToolCallRecord gRPC call", (done) => {
    grpcService.getAiToolCallRecord({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      AiToolCallRecordMetrics.recordOperation("READ");
      expect(AiToolCallRecordMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
