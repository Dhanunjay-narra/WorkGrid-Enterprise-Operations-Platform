import { BiDrilldownFilterGrpcService } from "../../../services/core-engine/src/analytics/grpc/BiDrilldownFilterGrpcService";
import { BiDrilldownFilterMetrics } from "../../../services/core-engine/src/analytics/metrics/BiDrilldownFilterMetrics";

describe("BiDrilldownFilter End-to-End Enterprise Scenario", () => {
  const grpcService = new BiDrilldownFilterGrpcService();

  test("dispatches and verifies BiDrilldownFilter gRPC call", (done) => {
    grpcService.getBiDrilldownFilter({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      BiDrilldownFilterMetrics.recordOperation("READ");
      expect(BiDrilldownFilterMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
