import { WfApprovalTaskGrpcService } from "../../../services/core-engine/src/workflow/grpc/WfApprovalTaskGrpcService";
import { WfApprovalTaskMetrics } from "../../../services/core-engine/src/workflow/metrics/WfApprovalTaskMetrics";

describe("WfApprovalTask End-to-End Enterprise Scenario", () => {
  const grpcService = new WfApprovalTaskGrpcService();

  test("dispatches and verifies WfApprovalTask gRPC call", (done) => {
    grpcService.getWfApprovalTask({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      WfApprovalTaskMetrics.recordOperation("READ");
      expect(WfApprovalTaskMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
