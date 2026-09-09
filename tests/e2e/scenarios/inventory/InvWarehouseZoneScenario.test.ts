import { InvWarehouseZoneGrpcService } from "../../../services/core-engine/src/inventory/grpc/InvWarehouseZoneGrpcService";
import { InvWarehouseZoneMetrics } from "../../../services/core-engine/src/inventory/metrics/InvWarehouseZoneMetrics";

describe("InvWarehouseZone End-to-End Enterprise Scenario", () => {
  const grpcService = new InvWarehouseZoneGrpcService();

  test("dispatches and verifies InvWarehouseZone gRPC call", (done) => {
    grpcService.getInvWarehouseZone({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      InvWarehouseZoneMetrics.recordOperation("READ");
      expect(InvWarehouseZoneMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
