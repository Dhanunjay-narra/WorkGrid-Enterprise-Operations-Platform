import { InvPurchaseOrderGrpcService } from "../../../services/core-engine/src/inventory/grpc/InvPurchaseOrderGrpcService";
import { InvPurchaseOrderMetrics } from "../../../services/core-engine/src/inventory/metrics/InvPurchaseOrderMetrics";

describe("InvPurchaseOrder End-to-End Enterprise Scenario", () => {
  const grpcService = new InvPurchaseOrderGrpcService();

  test("dispatches and verifies InvPurchaseOrder gRPC call", (done) => {
    grpcService.getInvPurchaseOrder({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      InvPurchaseOrderMetrics.recordOperation("READ");
      expect(InvPurchaseOrderMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
