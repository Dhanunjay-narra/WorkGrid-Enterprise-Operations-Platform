import { WfDeadLetterQueueGrpcService } from "../../../services/core-engine/src/workflow/grpc/WfDeadLetterQueueGrpcService";
import { WfDeadLetterQueueMetrics } from "../../../services/core-engine/src/workflow/metrics/WfDeadLetterQueueMetrics";

describe("WfDeadLetterQueue End-to-End Enterprise Scenario", () => {
  const grpcService = new WfDeadLetterQueueGrpcService();

  test("dispatches and verifies WfDeadLetterQueue gRPC call", (done) => {
    grpcService.getWfDeadLetterQueue({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      WfDeadLetterQueueMetrics.recordOperation("READ");
      expect(WfDeadLetterQueueMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
