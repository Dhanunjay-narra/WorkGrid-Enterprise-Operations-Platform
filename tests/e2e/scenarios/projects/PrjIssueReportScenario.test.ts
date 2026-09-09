import { PrjIssueReportGrpcService } from "../../../services/core-engine/src/projects/grpc/PrjIssueReportGrpcService";
import { PrjIssueReportMetrics } from "../../../services/core-engine/src/projects/metrics/PrjIssueReportMetrics";

describe("PrjIssueReport End-to-End Enterprise Scenario", () => {
  const grpcService = new PrjIssueReportGrpcService();

  test("dispatches and verifies PrjIssueReport gRPC call", (done) => {
    grpcService.getPrjIssueReport({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      PrjIssueReportMetrics.recordOperation("READ");
      expect(PrjIssueReportMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
