import { CommDirectMessageGrpcService } from "../../../services/core-engine/src/communication/grpc/CommDirectMessageGrpcService";
import { CommDirectMessageMetrics } from "../../../services/core-engine/src/communication/metrics/CommDirectMessageMetrics";

describe("CommDirectMessage End-to-End Enterprise Scenario", () => {
  const grpcService = new CommDirectMessageGrpcService();

  test("dispatches and verifies CommDirectMessage gRPC call", (done) => {
    grpcService.getCommDirectMessage({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CommDirectMessageMetrics.recordOperation("READ");
      expect(CommDirectMessageMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
