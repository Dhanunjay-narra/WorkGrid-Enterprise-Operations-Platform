import { PrjReleasePlanGrpcService } from "../../../services/core-engine/src/projects/grpc/PrjReleasePlanGrpcService";
import { PrjReleasePlanMetrics } from "../../../services/core-engine/src/projects/metrics/PrjReleasePlanMetrics";

describe("PrjReleasePlan End-to-End Enterprise Scenario", () => {
  const grpcService = new PrjReleasePlanGrpcService();

  test("dispatches and verifies PrjReleasePlan gRPC call", (done) => {
    grpcService.getPrjReleasePlan({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      PrjReleasePlanMetrics.recordOperation("READ");
      expect(PrjReleasePlanMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
