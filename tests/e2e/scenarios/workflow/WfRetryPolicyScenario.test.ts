import { WfRetryPolicyGrpcService } from "../../../services/core-engine/src/workflow/grpc/WfRetryPolicyGrpcService";
import { WfRetryPolicyMetrics } from "../../../services/core-engine/src/workflow/metrics/WfRetryPolicyMetrics";

describe("WfRetryPolicy End-to-End Enterprise Scenario", () => {
  const grpcService = new WfRetryPolicyGrpcService();

  test("dispatches and verifies WfRetryPolicy gRPC call", (done) => {
    grpcService.getWfRetryPolicy({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      WfRetryPolicyMetrics.recordOperation("READ");
      expect(WfRetryPolicyMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
