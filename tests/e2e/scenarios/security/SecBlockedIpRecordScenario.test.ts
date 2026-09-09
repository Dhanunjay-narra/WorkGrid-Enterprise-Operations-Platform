import { SecBlockedIpRecordGrpcService } from "../../../services/core-engine/src/security/grpc/SecBlockedIpRecordGrpcService";
import { SecBlockedIpRecordMetrics } from "../../../services/core-engine/src/security/metrics/SecBlockedIpRecordMetrics";

describe("SecBlockedIpRecord End-to-End Enterprise Scenario", () => {
  const grpcService = new SecBlockedIpRecordGrpcService();

  test("dispatches and verifies SecBlockedIpRecord gRPC call", (done) => {
    grpcService.getSecBlockedIpRecord({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SecBlockedIpRecordMetrics.recordOperation("READ");
      expect(SecBlockedIpRecordMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
