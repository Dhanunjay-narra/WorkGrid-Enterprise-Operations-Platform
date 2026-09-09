import { EvtAckReceiptGrpcService } from "../../../services/core-engine/src/events/grpc/EvtAckReceiptGrpcService";
import { EvtAckReceiptMetrics } from "../../../services/core-engine/src/events/metrics/EvtAckReceiptMetrics";

describe("EvtAckReceipt End-to-End Enterprise Scenario", () => {
  const grpcService = new EvtAckReceiptGrpcService();

  test("dispatches and verifies EvtAckReceipt gRPC call", (done) => {
    grpcService.getEvtAckReceipt({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      EvtAckReceiptMetrics.recordOperation("READ");
      expect(EvtAckReceiptMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
