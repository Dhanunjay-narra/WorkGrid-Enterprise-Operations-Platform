import { HrJobPostingGrpcService } from "../../../services/core-engine/src/hr/grpc/HrJobPostingGrpcService";
import { HrJobPostingMetrics } from "../../../services/core-engine/src/hr/metrics/HrJobPostingMetrics";

describe("HrJobPosting End-to-End Enterprise Scenario", () => {
  const grpcService = new HrJobPostingGrpcService();

  test("dispatches and verifies HrJobPosting gRPC call", (done) => {
    grpcService.getHrJobPosting({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      HrJobPostingMetrics.recordOperation("READ");
      expect(HrJobPostingMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
