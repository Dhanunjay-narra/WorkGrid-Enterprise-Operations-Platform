import { PrjTaskGrpcService } from "../../../services/core-engine/src/projects/grpc/PrjTaskGrpcService";
import { PrjTaskMetrics } from "../../../services/core-engine/src/projects/metrics/PrjTaskMetrics";

describe("PrjTask End-to-End Enterprise Scenario", () => {
  const grpcService = new PrjTaskGrpcService();

  test("dispatches and verifies PrjTask gRPC call", (done) => {
    grpcService.getPrjTask({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      PrjTaskMetrics.recordOperation("READ");
      expect(PrjTaskMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
