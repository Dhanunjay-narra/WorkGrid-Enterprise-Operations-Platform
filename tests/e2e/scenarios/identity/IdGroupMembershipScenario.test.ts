import { IdGroupMembershipGrpcService } from "../../../services/core-engine/src/identity/grpc/IdGroupMembershipGrpcService";
import { IdGroupMembershipMetrics } from "../../../services/core-engine/src/identity/metrics/IdGroupMembershipMetrics";

describe("IdGroupMembership End-to-End Enterprise Scenario", () => {
  const grpcService = new IdGroupMembershipGrpcService();

  test("dispatches and verifies IdGroupMembership gRPC call", (done) => {
    grpcService.getIdGroupMembership({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IdGroupMembershipMetrics.recordOperation("READ");
      expect(IdGroupMembershipMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
