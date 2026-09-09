import { InvPurchaseOrderItemGrpcService } from "../../../services/core-engine/src/inventory/grpc/InvPurchaseOrderItemGrpcService";
import { InvPurchaseOrderItemMetrics } from "../../../services/core-engine/src/inventory/metrics/InvPurchaseOrderItemMetrics";

describe("InvPurchaseOrderItem End-to-End Enterprise Scenario", () => {
  const grpcService = new InvPurchaseOrderItemGrpcService();

  test("dispatches and verifies InvPurchaseOrderItem gRPC call", (done) => {
    grpcService.getInvPurchaseOrderItem({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      InvPurchaseOrderItemMetrics.recordOperation("READ");
      expect(InvPurchaseOrderItemMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
