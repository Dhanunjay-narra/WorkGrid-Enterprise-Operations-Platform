import { InvStockMovementGrpcService } from "../../../services/core-engine/src/inventory/grpc/InvStockMovementGrpcService";
import { InvStockMovementMetrics } from "../../../services/core-engine/src/inventory/metrics/InvStockMovementMetrics";

describe("InvStockMovement End-to-End Enterprise Scenario", () => {
  const grpcService = new InvStockMovementGrpcService();

  test("dispatches and verifies InvStockMovement gRPC call", (done) => {
    grpcService.getInvStockMovement({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      InvStockMovementMetrics.recordOperation("READ");
      expect(InvStockMovementMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
