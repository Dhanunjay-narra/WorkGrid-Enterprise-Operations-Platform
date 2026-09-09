import { InvStockReservationGrpcService } from "../../../services/core-engine/src/inventory/grpc/InvStockReservationGrpcService";
import { InvStockReservationMetrics } from "../../../services/core-engine/src/inventory/metrics/InvStockReservationMetrics";

describe("InvStockReservation End-to-End Enterprise Scenario", () => {
  const grpcService = new InvStockReservationGrpcService();

  test("dispatches and verifies InvStockReservation gRPC call", (done) => {
    grpcService.getInvStockReservation({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      InvStockReservationMetrics.recordOperation("READ");
      expect(InvStockReservationMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
