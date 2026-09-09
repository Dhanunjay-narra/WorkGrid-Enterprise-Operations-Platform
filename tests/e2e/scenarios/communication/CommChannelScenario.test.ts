import { CommChannelGrpcService } from "../../../services/core-engine/src/communication/grpc/CommChannelGrpcService";
import { CommChannelMetrics } from "../../../services/core-engine/src/communication/metrics/CommChannelMetrics";

describe("CommChannel End-to-End Enterprise Scenario", () => {
  const grpcService = new CommChannelGrpcService();

  test("dispatches and verifies CommChannel gRPC call", (done) => {
    grpcService.getCommChannel({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CommChannelMetrics.recordOperation("READ");
      expect(CommChannelMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
