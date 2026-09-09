import { PrjSprintGrpcService } from "../../../services/core-engine/src/projects/grpc/PrjSprintGrpcService";
import { PrjSprintMetrics } from "../../../services/core-engine/src/projects/metrics/PrjSprintMetrics";

describe("PrjSprint End-to-End Enterprise Scenario", () => {
  const grpcService = new PrjSprintGrpcService();

  test("dispatches and verifies PrjSprint gRPC call", (done) => {
    grpcService.getPrjSprint({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      PrjSprintMetrics.recordOperation("READ");
      expect(PrjSprintMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
