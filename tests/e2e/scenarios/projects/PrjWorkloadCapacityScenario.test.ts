import { PrjWorkloadCapacityGrpcService } from "../../../services/core-engine/src/projects/grpc/PrjWorkloadCapacityGrpcService";
import { PrjWorkloadCapacityMetrics } from "../../../services/core-engine/src/projects/metrics/PrjWorkloadCapacityMetrics";

describe("PrjWorkloadCapacity End-to-End Enterprise Scenario", () => {
  const grpcService = new PrjWorkloadCapacityGrpcService();

  test("dispatches and verifies PrjWorkloadCapacity gRPC call", (done) => {
    grpcService.getPrjWorkloadCapacity({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      PrjWorkloadCapacityMetrics.recordOperation("READ");
      expect(PrjWorkloadCapacityMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
