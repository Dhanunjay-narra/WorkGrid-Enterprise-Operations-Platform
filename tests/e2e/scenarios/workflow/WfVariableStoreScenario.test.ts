import { WfVariableStoreGrpcService } from "../../../services/core-engine/src/workflow/grpc/WfVariableStoreGrpcService";
import { WfVariableStoreMetrics } from "../../../services/core-engine/src/workflow/metrics/WfVariableStoreMetrics";

describe("WfVariableStore End-to-End Enterprise Scenario", () => {
  const grpcService = new WfVariableStoreGrpcService();

  test("dispatches and verifies WfVariableStore gRPC call", (done) => {
    grpcService.getWfVariableStore({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      WfVariableStoreMetrics.recordOperation("READ");
      expect(WfVariableStoreMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
