import { FinVendorBillGrpcService } from "../../../services/core-engine/src/finance/grpc/FinVendorBillGrpcService";
import { FinVendorBillMetrics } from "../../../services/core-engine/src/finance/metrics/FinVendorBillMetrics";

describe("FinVendorBill End-to-End Enterprise Scenario", () => {
  const grpcService = new FinVendorBillGrpcService();

  test("dispatches and verifies FinVendorBill gRPC call", (done) => {
    grpcService.getFinVendorBill({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      FinVendorBillMetrics.recordOperation("READ");
      expect(FinVendorBillMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
