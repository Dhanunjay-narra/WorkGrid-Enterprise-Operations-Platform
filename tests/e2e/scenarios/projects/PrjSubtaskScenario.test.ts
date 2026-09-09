import { PrjSubtaskGrpcService } from "../../../services/core-engine/src/projects/grpc/PrjSubtaskGrpcService";
import { PrjSubtaskMetrics } from "../../../services/core-engine/src/projects/metrics/PrjSubtaskMetrics";

describe("PrjSubtask End-to-End Enterprise Scenario", () => {
  const grpcService = new PrjSubtaskGrpcService();

  test("dispatches and verifies PrjSubtask gRPC call", (done) => {
    grpcService.getPrjSubtask({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      PrjSubtaskMetrics.recordOperation("READ");
      expect(PrjSubtaskMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
