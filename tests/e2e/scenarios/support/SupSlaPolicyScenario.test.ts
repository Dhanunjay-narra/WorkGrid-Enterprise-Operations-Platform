import { SupSlaPolicyGrpcService } from "../../../services/core-engine/src/support/grpc/SupSlaPolicyGrpcService";
import { SupSlaPolicyMetrics } from "../../../services/core-engine/src/support/metrics/SupSlaPolicyMetrics";

describe("SupSlaPolicy End-to-End Enterprise Scenario", () => {
  const grpcService = new SupSlaPolicyGrpcService();

  test("dispatches and verifies SupSlaPolicy gRPC call", (done) => {
    grpcService.getSupSlaPolicy({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SupSlaPolicyMetrics.recordOperation("READ");
      expect(SupSlaPolicyMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
