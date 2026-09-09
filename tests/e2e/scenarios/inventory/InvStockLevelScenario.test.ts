import { InvStockLevelGrpcService } from "../../../services/core-engine/src/inventory/grpc/InvStockLevelGrpcService";
import { InvStockLevelMetrics } from "../../../services/core-engine/src/inventory/metrics/InvStockLevelMetrics";

describe("InvStockLevel End-to-End Enterprise Scenario", () => {
  const grpcService = new InvStockLevelGrpcService();

  test("dispatches and verifies InvStockLevel gRPC call", (done) => {
    grpcService.getInvStockLevel({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      InvStockLevelMetrics.recordOperation("READ");
      expect(InvStockLevelMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
