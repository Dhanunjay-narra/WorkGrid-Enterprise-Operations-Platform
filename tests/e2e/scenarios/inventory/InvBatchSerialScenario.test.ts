import { InvBatchSerialGrpcService } from "../../../services/core-engine/src/inventory/grpc/InvBatchSerialGrpcService";
import { InvBatchSerialMetrics } from "../../../services/core-engine/src/inventory/metrics/InvBatchSerialMetrics";

describe("InvBatchSerial End-to-End Enterprise Scenario", () => {
  const grpcService = new InvBatchSerialGrpcService();

  test("dispatches and verifies InvBatchSerial gRPC call", (done) => {
    grpcService.getInvBatchSerial({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      InvBatchSerialMetrics.recordOperation("READ");
      expect(InvBatchSerialMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
