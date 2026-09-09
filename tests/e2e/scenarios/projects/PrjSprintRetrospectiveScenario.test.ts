import { PrjSprintRetrospectiveGrpcService } from "../../../services/core-engine/src/projects/grpc/PrjSprintRetrospectiveGrpcService";
import { PrjSprintRetrospectiveMetrics } from "../../../services/core-engine/src/projects/metrics/PrjSprintRetrospectiveMetrics";

describe("PrjSprintRetrospective End-to-End Enterprise Scenario", () => {
  const grpcService = new PrjSprintRetrospectiveGrpcService();

  test("dispatches and verifies PrjSprintRetrospective gRPC call", (done) => {
    grpcService.getPrjSprintRetrospective({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      PrjSprintRetrospectiveMetrics.recordOperation("READ");
      expect(PrjSprintRetrospectiveMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
