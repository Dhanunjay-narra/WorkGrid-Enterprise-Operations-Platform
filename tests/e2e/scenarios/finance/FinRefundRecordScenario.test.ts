import { FinRefundRecordGrpcService } from "../../../services/core-engine/src/finance/grpc/FinRefundRecordGrpcService";
import { FinRefundRecordMetrics } from "../../../services/core-engine/src/finance/metrics/FinRefundRecordMetrics";

describe("FinRefundRecord End-to-End Enterprise Scenario", () => {
  const grpcService = new FinRefundRecordGrpcService();

  test("dispatches and verifies FinRefundRecord gRPC call", (done) => {
    grpcService.getFinRefundRecord({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      FinRefundRecordMetrics.recordOperation("READ");
      expect(FinRefundRecordMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
