import { IdUserGrpcService } from "../../../services/core-engine/src/identity/grpc/IdUserGrpcService";
import { IdUserMetrics } from "../../../services/core-engine/src/identity/metrics/IdUserMetrics";

describe("IdUser End-to-End Enterprise Scenario", () => {
  const grpcService = new IdUserGrpcService();

  test("dispatches and verifies IdUser gRPC call", (done) => {
    grpcService.getIdUser({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IdUserMetrics.recordOperation("READ");
      expect(IdUserMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
