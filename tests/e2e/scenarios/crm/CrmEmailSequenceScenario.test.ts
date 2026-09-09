import { CrmEmailSequenceGrpcService } from "../../../services/core-engine/src/crm/grpc/CrmEmailSequenceGrpcService";
import { CrmEmailSequenceMetrics } from "../../../services/core-engine/src/crm/metrics/CrmEmailSequenceMetrics";

describe("CrmEmailSequence End-to-End Enterprise Scenario", () => {
  const grpcService = new CrmEmailSequenceGrpcService();

  test("dispatches and verifies CrmEmailSequence gRPC call", (done) => {
    grpcService.getCrmEmailSequence({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CrmEmailSequenceMetrics.recordOperation("READ");
      expect(CrmEmailSequenceMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
