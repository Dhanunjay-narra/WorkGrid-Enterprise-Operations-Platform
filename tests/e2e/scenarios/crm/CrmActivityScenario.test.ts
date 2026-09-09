import { CrmActivityGrpcService } from "../../../services/core-engine/src/crm/grpc/CrmActivityGrpcService";
import { CrmActivityMetrics } from "../../../services/core-engine/src/crm/metrics/CrmActivityMetrics";

describe("CrmActivity End-to-End Enterprise Scenario", () => {
  const grpcService = new CrmActivityGrpcService();

  test("dispatches and verifies CrmActivity gRPC call", (done) => {
    grpcService.getCrmActivity({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CrmActivityMetrics.recordOperation("READ");
      expect(CrmActivityMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
