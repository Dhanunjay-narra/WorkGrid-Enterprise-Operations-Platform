import { PrjKanbanColumnGrpcService } from "../../../services/core-engine/src/projects/grpc/PrjKanbanColumnGrpcService";
import { PrjKanbanColumnMetrics } from "../../../services/core-engine/src/projects/metrics/PrjKanbanColumnMetrics";

describe("PrjKanbanColumn End-to-End Enterprise Scenario", () => {
  const grpcService = new PrjKanbanColumnGrpcService();

  test("dispatches and verifies PrjKanbanColumn gRPC call", (done) => {
    grpcService.getPrjKanbanColumn({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      PrjKanbanColumnMetrics.recordOperation("READ");
      expect(PrjKanbanColumnMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
