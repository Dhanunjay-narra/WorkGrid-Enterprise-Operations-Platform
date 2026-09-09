import { PrjEpicGrpcService } from "../../../services/core-engine/src/projects/grpc/PrjEpicGrpcService";
import { PrjEpicMetrics } from "../../../services/core-engine/src/projects/metrics/PrjEpicMetrics";

describe("PrjEpic End-to-End Enterprise Scenario", () => {
  const grpcService = new PrjEpicGrpcService();

  test("dispatches and verifies PrjEpic gRPC call", (done) => {
    grpcService.getPrjEpic({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      PrjEpicMetrics.recordOperation("READ");
      expect(PrjEpicMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
