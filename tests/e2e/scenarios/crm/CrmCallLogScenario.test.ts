import { CrmCallLogGrpcService } from "../../../services/core-engine/src/crm/grpc/CrmCallLogGrpcService";
import { CrmCallLogMetrics } from "../../../services/core-engine/src/crm/metrics/CrmCallLogMetrics";

describe("CrmCallLog End-to-End Enterprise Scenario", () => {
  const grpcService = new CrmCallLogGrpcService();

  test("dispatches and verifies CrmCallLog gRPC call", (done) => {
    grpcService.getCrmCallLog({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CrmCallLogMetrics.recordOperation("READ");
      expect(CrmCallLogMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
