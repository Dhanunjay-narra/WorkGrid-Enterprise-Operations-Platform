import { CommChatMessageGrpcService } from "../../../services/core-engine/src/communication/grpc/CommChatMessageGrpcService";
import { CommChatMessageMetrics } from "../../../services/core-engine/src/communication/metrics/CommChatMessageMetrics";

describe("CommChatMessage End-to-End Enterprise Scenario", () => {
  const grpcService = new CommChatMessageGrpcService();

  test("dispatches and verifies CommChatMessage gRPC call", (done) => {
    grpcService.getCommChatMessage({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CommChatMessageMetrics.recordOperation("READ");
      expect(CommChatMessageMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
