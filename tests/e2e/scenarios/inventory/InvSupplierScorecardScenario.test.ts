import { InvSupplierScorecardGrpcService } from "../../../services/core-engine/src/inventory/grpc/InvSupplierScorecardGrpcService";
import { InvSupplierScorecardMetrics } from "../../../services/core-engine/src/inventory/metrics/InvSupplierScorecardMetrics";

describe("InvSupplierScorecard End-to-End Enterprise Scenario", () => {
  const grpcService = new InvSupplierScorecardGrpcService();

  test("dispatches and verifies InvSupplierScorecard gRPC call", (done) => {
    grpcService.getInvSupplierScorecard({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      InvSupplierScorecardMetrics.recordOperation("READ");
      expect(InvSupplierScorecardMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
