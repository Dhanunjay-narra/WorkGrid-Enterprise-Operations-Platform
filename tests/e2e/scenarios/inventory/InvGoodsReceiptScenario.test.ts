import { InvGoodsReceiptGrpcService } from "../../../services/core-engine/src/inventory/grpc/InvGoodsReceiptGrpcService";
import { InvGoodsReceiptMetrics } from "../../../services/core-engine/src/inventory/metrics/InvGoodsReceiptMetrics";

describe("InvGoodsReceipt End-to-End Enterprise Scenario", () => {
  const grpcService = new InvGoodsReceiptGrpcService();

  test("dispatches and verifies InvGoodsReceipt gRPC call", (done) => {
    grpcService.getInvGoodsReceipt({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      InvGoodsReceiptMetrics.recordOperation("READ");
      expect(InvGoodsReceiptMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
