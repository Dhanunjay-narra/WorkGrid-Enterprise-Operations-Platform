import { WfWorkflowExecutionGrpcService } from "../../../services/core-engine/src/workflow/grpc/WfWorkflowExecutionGrpcService";
import { WfWorkflowExecutionMetrics } from "../../../services/core-engine/src/workflow/metrics/WfWorkflowExecutionMetrics";

describe("WfWorkflowExecution End-to-End Enterprise Scenario", () => {
  const grpcService = new WfWorkflowExecutionGrpcService();

  test("dispatches and verifies WfWorkflowExecution gRPC call", (done) => {
    grpcService.getWfWorkflowExecution({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      WfWorkflowExecutionMetrics.recordOperation("READ");
      expect(WfWorkflowExecutionMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
