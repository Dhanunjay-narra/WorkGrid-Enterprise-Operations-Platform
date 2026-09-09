import { SupSlaTimerGrpcService } from "../../../services/core-engine/src/support/grpc/SupSlaTimerGrpcService";
import { SupSlaTimerMetrics } from "../../../services/core-engine/src/support/metrics/SupSlaTimerMetrics";

describe("SupSlaTimer End-to-End Enterprise Scenario", () => {
  const grpcService = new SupSlaTimerGrpcService();

  test("dispatches and verifies SupSlaTimer gRPC call", (done) => {
    grpcService.getSupSlaTimer({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SupSlaTimerMetrics.recordOperation("READ");
      expect(SupSlaTimerMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
