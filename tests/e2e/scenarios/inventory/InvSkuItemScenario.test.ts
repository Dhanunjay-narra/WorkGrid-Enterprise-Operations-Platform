import { InvSkuItemGrpcService } from "../../../services/core-engine/src/inventory/grpc/InvSkuItemGrpcService";
import { InvSkuItemMetrics } from "../../../services/core-engine/src/inventory/metrics/InvSkuItemMetrics";

describe("InvSkuItem End-to-End Enterprise Scenario", () => {
  const grpcService = new InvSkuItemGrpcService();

  test("dispatches and verifies InvSkuItem gRPC call", (done) => {
    grpcService.getInvSkuItem({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      InvSkuItemMetrics.recordOperation("READ");
      expect(InvSkuItemMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
