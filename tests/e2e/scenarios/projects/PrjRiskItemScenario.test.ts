import { PrjRiskItemGrpcService } from "../../../services/core-engine/src/projects/grpc/PrjRiskItemGrpcService";
import { PrjRiskItemMetrics } from "../../../services/core-engine/src/projects/metrics/PrjRiskItemMetrics";

describe("PrjRiskItem End-to-End Enterprise Scenario", () => {
  const grpcService = new PrjRiskItemGrpcService();

  test("dispatches and verifies PrjRiskItem gRPC call", (done) => {
    grpcService.getPrjRiskItem({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      PrjRiskItemMetrics.recordOperation("READ");
      expect(PrjRiskItemMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
