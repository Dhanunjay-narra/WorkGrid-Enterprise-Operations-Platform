import { CrmOpportunitySplitGrpcService } from "../../../services/core-engine/src/crm/grpc/CrmOpportunitySplitGrpcService";
import { CrmOpportunitySplitMetrics } from "../../../services/core-engine/src/crm/metrics/CrmOpportunitySplitMetrics";

describe("CrmOpportunitySplit End-to-End Enterprise Scenario", () => {
  const grpcService = new CrmOpportunitySplitGrpcService();

  test("dispatches and verifies CrmOpportunitySplit gRPC call", (done) => {
    grpcService.getCrmOpportunitySplit({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CrmOpportunitySplitMetrics.recordOperation("READ");
      expect(CrmOpportunitySplitMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
