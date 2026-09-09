import { SupCannedResponseGrpcService } from "../../../services/core-engine/src/support/grpc/SupCannedResponseGrpcService";
import { SupCannedResponseMetrics } from "../../../services/core-engine/src/support/metrics/SupCannedResponseMetrics";

describe("SupCannedResponse End-to-End Enterprise Scenario", () => {
  const grpcService = new SupCannedResponseGrpcService();

  test("dispatches and verifies SupCannedResponse gRPC call", (done) => {
    grpcService.getSupCannedResponse({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SupCannedResponseMetrics.recordOperation("READ");
      expect(SupCannedResponseMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
