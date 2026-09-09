import { IdSessionGrpcService } from "../../../services/core-engine/src/identity/grpc/IdSessionGrpcService";
import { IdSessionMetrics } from "../../../services/core-engine/src/identity/metrics/IdSessionMetrics";

describe("IdSession End-to-End Enterprise Scenario", () => {
  const grpcService = new IdSessionGrpcService();

  test("dispatches and verifies IdSession gRPC call", (done) => {
    grpcService.getIdSession({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IdSessionMetrics.recordOperation("READ");
      expect(IdSessionMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
