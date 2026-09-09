import { WfNodeExecutionLogGrpcService } from "../../../services/core-engine/src/workflow/grpc/WfNodeExecutionLogGrpcService";
import { WfNodeExecutionLogMetrics } from "../../../services/core-engine/src/workflow/metrics/WfNodeExecutionLogMetrics";

describe("WfNodeExecutionLog End-to-End Enterprise Scenario", () => {
  const grpcService = new WfNodeExecutionLogGrpcService();

  test("dispatches and verifies WfNodeExecutionLog gRPC call", (done) => {
    grpcService.getWfNodeExecutionLog({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      WfNodeExecutionLogMetrics.recordOperation("READ");
      expect(WfNodeExecutionLogMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
