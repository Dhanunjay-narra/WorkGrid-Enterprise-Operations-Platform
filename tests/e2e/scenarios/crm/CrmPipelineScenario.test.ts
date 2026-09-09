import { CrmPipelineGrpcService } from "../../../services/core-engine/src/crm/grpc/CrmPipelineGrpcService";
import { CrmPipelineMetrics } from "../../../services/core-engine/src/crm/metrics/CrmPipelineMetrics";

describe("CrmPipeline End-to-End Enterprise Scenario", () => {
  const grpcService = new CrmPipelineGrpcService();

  test("dispatches and verifies CrmPipeline gRPC call", (done) => {
    grpcService.getCrmPipeline({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CrmPipelineMetrics.recordOperation("READ");
      expect(CrmPipelineMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
