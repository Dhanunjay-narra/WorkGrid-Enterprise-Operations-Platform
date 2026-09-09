import { CommChannelMemberGrpcService } from "../../../services/core-engine/src/communication/grpc/CommChannelMemberGrpcService";
import { CommChannelMemberMetrics } from "../../../services/core-engine/src/communication/metrics/CommChannelMemberMetrics";

describe("CommChannelMember End-to-End Enterprise Scenario", () => {
  const grpcService = new CommChannelMemberGrpcService();

  test("dispatches and verifies CommChannelMember gRPC call", (done) => {
    grpcService.getCommChannelMember({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CommChannelMemberMetrics.recordOperation("READ");
      expect(CommChannelMemberMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
