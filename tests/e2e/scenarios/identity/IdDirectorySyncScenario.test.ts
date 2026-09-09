import { IdDirectorySyncGrpcService } from "../../../services/core-engine/src/identity/grpc/IdDirectorySyncGrpcService";
import { IdDirectorySyncMetrics } from "../../../services/core-engine/src/identity/metrics/IdDirectorySyncMetrics";

describe("IdDirectorySync End-to-End Enterprise Scenario", () => {
  const grpcService = new IdDirectorySyncGrpcService();

  test("dispatches and verifies IdDirectorySync gRPC call", (done) => {
    grpcService.getIdDirectorySync({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IdDirectorySyncMetrics.recordOperation("READ");
      expect(IdDirectorySyncMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
