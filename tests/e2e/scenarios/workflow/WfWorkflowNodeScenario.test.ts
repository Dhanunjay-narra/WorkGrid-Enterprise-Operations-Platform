import { WfWorkflowNodeGrpcService } from "../../../services/core-engine/src/workflow/grpc/WfWorkflowNodeGrpcService";
import { WfWorkflowNodeMetrics } from "../../../services/core-engine/src/workflow/metrics/WfWorkflowNodeMetrics";

describe("WfWorkflowNode End-to-End Enterprise Scenario", () => {
  const grpcService = new WfWorkflowNodeGrpcService();

  test("dispatches and verifies WfWorkflowNode gRPC call", (done) => {
    grpcService.getWfWorkflowNode({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      WfWorkflowNodeMetrics.recordOperation("READ");
      expect(WfWorkflowNodeMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
