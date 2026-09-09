import { PrjBudgetLineGrpcService } from "../../../services/core-engine/src/projects/grpc/PrjBudgetLineGrpcService";
import { PrjBudgetLineMetrics } from "../../../services/core-engine/src/projects/metrics/PrjBudgetLineMetrics";

describe("PrjBudgetLine End-to-End Enterprise Scenario", () => {
  const grpcService = new PrjBudgetLineGrpcService();

  test("dispatches and verifies PrjBudgetLine gRPC call", (done) => {
    grpcService.getPrjBudgetLine({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      PrjBudgetLineMetrics.recordOperation("READ");
      expect(PrjBudgetLineMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
