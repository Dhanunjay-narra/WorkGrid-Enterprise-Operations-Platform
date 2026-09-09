import { HrCandidateGrpcService } from "../../../services/core-engine/src/hr/grpc/HrCandidateGrpcService";
import { HrCandidateMetrics } from "../../../services/core-engine/src/hr/metrics/HrCandidateMetrics";

describe("HrCandidate End-to-End Enterprise Scenario", () => {
  const grpcService = new HrCandidateGrpcService();

  test("dispatches and verifies HrCandidate gRPC call", (done) => {
    grpcService.getHrCandidate({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      HrCandidateMetrics.recordOperation("READ");
      expect(HrCandidateMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
