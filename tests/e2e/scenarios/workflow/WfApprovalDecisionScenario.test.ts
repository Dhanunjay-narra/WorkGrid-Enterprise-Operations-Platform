import { WfApprovalDecisionGrpcService } from "../../../services/core-engine/src/workflow/grpc/WfApprovalDecisionGrpcService";
import { WfApprovalDecisionMetrics } from "../../../services/core-engine/src/workflow/metrics/WfApprovalDecisionMetrics";

describe("WfApprovalDecision End-to-End Enterprise Scenario", () => {
  const grpcService = new WfApprovalDecisionGrpcService();

  test("dispatches and verifies WfApprovalDecision gRPC call", (done) => {
    grpcService.getWfApprovalDecision({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      WfApprovalDecisionMetrics.recordOperation("READ");
      expect(WfApprovalDecisionMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
