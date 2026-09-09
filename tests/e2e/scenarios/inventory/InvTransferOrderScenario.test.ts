import { InvTransferOrderGrpcService } from "../../../services/core-engine/src/inventory/grpc/InvTransferOrderGrpcService";
import { InvTransferOrderMetrics } from "../../../services/core-engine/src/inventory/metrics/InvTransferOrderMetrics";

describe("InvTransferOrder End-to-End Enterprise Scenario", () => {
  const grpcService = new InvTransferOrderGrpcService();

  test("dispatches and verifies InvTransferOrder gRPC call", (done) => {
    grpcService.getInvTransferOrder({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      InvTransferOrderMetrics.recordOperation("READ");
      expect(InvTransferOrderMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
