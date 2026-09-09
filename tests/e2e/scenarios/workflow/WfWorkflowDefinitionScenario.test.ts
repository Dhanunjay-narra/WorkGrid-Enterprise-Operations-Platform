import { WfWorkflowDefinitionGrpcService } from "../../../services/core-engine/src/workflow/grpc/WfWorkflowDefinitionGrpcService";
import { WfWorkflowDefinitionMetrics } from "../../../services/core-engine/src/workflow/metrics/WfWorkflowDefinitionMetrics";

describe("WfWorkflowDefinition End-to-End Enterprise Scenario", () => {
  const grpcService = new WfWorkflowDefinitionGrpcService();

  test("dispatches and verifies WfWorkflowDefinition gRPC call", (done) => {
    grpcService.getWfWorkflowDefinition({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      WfWorkflowDefinitionMetrics.recordOperation("READ");
      expect(WfWorkflowDefinitionMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
