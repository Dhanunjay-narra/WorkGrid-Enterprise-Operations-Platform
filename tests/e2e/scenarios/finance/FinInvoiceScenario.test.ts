import { FinInvoiceGrpcService } from "../../../services/core-engine/src/finance/grpc/FinInvoiceGrpcService";
import { FinInvoiceMetrics } from "../../../services/core-engine/src/finance/metrics/FinInvoiceMetrics";

describe("FinInvoice End-to-End Enterprise Scenario", () => {
  const grpcService = new FinInvoiceGrpcService();

  test("dispatches and verifies FinInvoice gRPC call", (done) => {
    grpcService.getFinInvoice({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      FinInvoiceMetrics.recordOperation("READ");
      expect(FinInvoiceMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
