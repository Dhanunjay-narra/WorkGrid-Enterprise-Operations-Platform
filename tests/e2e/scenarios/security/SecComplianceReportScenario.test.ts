import { SecComplianceReportGrpcService } from "../../../services/core-engine/src/security/grpc/SecComplianceReportGrpcService";
import { SecComplianceReportMetrics } from "../../../services/core-engine/src/security/metrics/SecComplianceReportMetrics";

describe("SecComplianceReport End-to-End Enterprise Scenario", () => {
  const grpcService = new SecComplianceReportGrpcService();

  test("dispatches and verifies SecComplianceReport gRPC call", (done) => {
    grpcService.getSecComplianceReport({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SecComplianceReportMetrics.recordOperation("READ");
      expect(SecComplianceReportMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
