import { EvtStreamSnapshotGrpcService } from "../../../services/core-engine/src/events/grpc/EvtStreamSnapshotGrpcService";
import { EvtStreamSnapshotMetrics } from "../../../services/core-engine/src/events/metrics/EvtStreamSnapshotMetrics";

describe("EvtStreamSnapshot End-to-End Enterprise Scenario", () => {
  const grpcService = new EvtStreamSnapshotGrpcService();

  test("dispatches and verifies EvtStreamSnapshot gRPC call", (done) => {
    grpcService.getEvtStreamSnapshot({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      EvtStreamSnapshotMetrics.recordOperation("READ");
      expect(EvtStreamSnapshotMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
