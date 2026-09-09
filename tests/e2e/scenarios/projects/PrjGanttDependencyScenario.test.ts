import { PrjGanttDependencyGrpcService } from "../../../services/core-engine/src/projects/grpc/PrjGanttDependencyGrpcService";
import { PrjGanttDependencyMetrics } from "../../../services/core-engine/src/projects/metrics/PrjGanttDependencyMetrics";

describe("PrjGanttDependency End-to-End Enterprise Scenario", () => {
  const grpcService = new PrjGanttDependencyGrpcService();

  test("dispatches and verifies PrjGanttDependency gRPC call", (done) => {
    grpcService.getPrjGanttDependency({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      PrjGanttDependencyMetrics.recordOperation("READ");
      expect(PrjGanttDependencyMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
