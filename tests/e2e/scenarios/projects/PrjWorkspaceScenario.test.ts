import { PrjWorkspaceGrpcService } from "../../../services/core-engine/src/projects/grpc/PrjWorkspaceGrpcService";
import { PrjWorkspaceMetrics } from "../../../services/core-engine/src/projects/metrics/PrjWorkspaceMetrics";

describe("PrjWorkspace End-to-End Enterprise Scenario", () => {
  const grpcService = new PrjWorkspaceGrpcService();

  test("dispatches and verifies PrjWorkspace gRPC call", (done) => {
    grpcService.getPrjWorkspace({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      PrjWorkspaceMetrics.recordOperation("READ");
      expect(PrjWorkspaceMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
