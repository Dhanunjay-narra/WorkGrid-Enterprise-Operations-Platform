import { InvStockAuditGrpcService } from "../../../services/core-engine/src/inventory/grpc/InvStockAuditGrpcService";
import { InvStockAuditMetrics } from "../../../services/core-engine/src/inventory/metrics/InvStockAuditMetrics";

describe("InvStockAudit End-to-End Enterprise Scenario", () => {
  const grpcService = new InvStockAuditGrpcService();

  test("dispatches and verifies InvStockAudit gRPC call", (done) => {
    grpcService.getInvStockAudit({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      InvStockAuditMetrics.recordOperation("READ");
      expect(InvStockAuditMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
