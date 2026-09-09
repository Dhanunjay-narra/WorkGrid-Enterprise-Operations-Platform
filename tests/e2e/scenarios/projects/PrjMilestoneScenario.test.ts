import { PrjMilestoneGrpcService } from "../../../services/core-engine/src/projects/grpc/PrjMilestoneGrpcService";
import { PrjMilestoneMetrics } from "../../../services/core-engine/src/projects/metrics/PrjMilestoneMetrics";

describe("PrjMilestone End-to-End Enterprise Scenario", () => {
  const grpcService = new PrjMilestoneGrpcService();

  test("dispatches and verifies PrjMilestone gRPC call", (done) => {
    grpcService.getPrjMilestone({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      PrjMilestoneMetrics.recordOperation("READ");
      expect(PrjMilestoneMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
