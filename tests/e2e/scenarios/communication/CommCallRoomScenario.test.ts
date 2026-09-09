import { CommCallRoomGrpcService } from "../../../services/core-engine/src/communication/grpc/CommCallRoomGrpcService";
import { CommCallRoomMetrics } from "../../../services/core-engine/src/communication/metrics/CommCallRoomMetrics";

describe("CommCallRoom End-to-End Enterprise Scenario", () => {
  const grpcService = new CommCallRoomGrpcService();

  test("dispatches and verifies CommCallRoom gRPC call", (done) => {
    grpcService.getCommCallRoom({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CommCallRoomMetrics.recordOperation("READ");
      expect(CommCallRoomMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
