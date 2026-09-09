import { SupCustomerSurveyGrpcService } from "../../../services/core-engine/src/support/grpc/SupCustomerSurveyGrpcService";
import { SupCustomerSurveyMetrics } from "../../../services/core-engine/src/support/metrics/SupCustomerSurveyMetrics";

describe("SupCustomerSurvey End-to-End Enterprise Scenario", () => {
  const grpcService = new SupCustomerSurveyGrpcService();

  test("dispatches and verifies SupCustomerSurvey gRPC call", (done) => {
    grpcService.getSupCustomerSurvey({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SupCustomerSurveyMetrics.recordOperation("READ");
      expect(SupCustomerSurveyMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
