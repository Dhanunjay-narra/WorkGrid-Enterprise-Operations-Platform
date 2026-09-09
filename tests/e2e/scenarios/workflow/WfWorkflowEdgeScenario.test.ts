import { WfWorkflowEdgeGrpcService } from "../../../services/core-engine/src/workflow/grpc/WfWorkflowEdgeGrpcService";
import { WfWorkflowEdgeMetrics } from "../../../services/core-engine/src/workflow/metrics/WfWorkflowEdgeMetrics";

describe("WfWorkflowEdge End-to-End Enterprise Scenario", () => {
  const grpcService = new WfWorkflowEdgeGrpcService();

  test("dispatches and verifies WfWorkflowEdge gRPC call", (done) => {
    grpcService.getWfWorkflowEdge({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      WfWorkflowEdgeMetrics.recordOperation("READ");
      expect(WfWorkflowEdgeMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
