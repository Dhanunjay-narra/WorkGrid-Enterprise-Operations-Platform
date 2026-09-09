import { IdAuditTrailGrpcService } from "../../../services/core-engine/src/identity/grpc/IdAuditTrailGrpcService";
import { IdAuditTrailMetrics } from "../../../services/core-engine/src/identity/metrics/IdAuditTrailMetrics";

describe("IdAuditTrail End-to-End Enterprise Scenario", () => {
  const grpcService = new IdAuditTrailGrpcService();

  test("dispatches and verifies IdAuditTrail gRPC call", (done) => {
    grpcService.getIdAuditTrail({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IdAuditTrailMetrics.recordOperation("READ");
      expect(IdAuditTrailMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
