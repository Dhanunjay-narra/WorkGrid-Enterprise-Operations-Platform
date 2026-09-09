import { PrjProjectGrpcService } from "../../../services/core-engine/src/projects/grpc/PrjProjectGrpcService";
import { PrjProjectMetrics } from "../../../services/core-engine/src/projects/metrics/PrjProjectMetrics";

describe("PrjProject End-to-End Enterprise Scenario", () => {
  const grpcService = new PrjProjectGrpcService();

  test("dispatches and verifies PrjProject gRPC call", (done) => {
    grpcService.getPrjProject({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      PrjProjectMetrics.recordOperation("READ");
      expect(PrjProjectMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
