import { InvWarehouseGrpcService } from "../../../services/core-engine/src/inventory/grpc/InvWarehouseGrpcService";
import { InvWarehouseMetrics } from "../../../services/core-engine/src/inventory/metrics/InvWarehouseMetrics";

describe("InvWarehouse End-to-End Enterprise Scenario", () => {
  const grpcService = new InvWarehouseGrpcService();

  test("dispatches and verifies InvWarehouse gRPC call", (done) => {
    grpcService.getInvWarehouse({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      InvWarehouseMetrics.recordOperation("READ");
      expect(InvWarehouseMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
