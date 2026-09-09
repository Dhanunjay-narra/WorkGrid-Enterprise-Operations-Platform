import { FinInvoiceItemGrpcService } from "../../../services/core-engine/src/finance/grpc/FinInvoiceItemGrpcService";
import { FinInvoiceItemMetrics } from "../../../services/core-engine/src/finance/metrics/FinInvoiceItemMetrics";

describe("FinInvoiceItem End-to-End Enterprise Scenario", () => {
  const grpcService = new FinInvoiceItemGrpcService();

  test("dispatches and verifies FinInvoiceItem gRPC call", (done) => {
    grpcService.getFinInvoiceItem({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      FinInvoiceItemMetrics.recordOperation("READ");
      expect(FinInvoiceItemMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
