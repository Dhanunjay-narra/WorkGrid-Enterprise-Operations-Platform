import { WfWorkflowVersionGrpcService } from "../../../services/core-engine/src/workflow/grpc/WfWorkflowVersionGrpcService";
import { WfWorkflowVersionMetrics } from "../../../services/core-engine/src/workflow/metrics/WfWorkflowVersionMetrics";

describe("WfWorkflowVersion End-to-End Enterprise Scenario", () => {
  const grpcService = new WfWorkflowVersionGrpcService();

  test("dispatches and verifies WfWorkflowVersion gRPC call", (done) => {
    grpcService.getWfWorkflowVersion({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      WfWorkflowVersionMetrics.recordOperation("READ");
      expect(WfWorkflowVersionMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
