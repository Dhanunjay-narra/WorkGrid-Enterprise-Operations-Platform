import { EvtEventPartitionGrpcService } from "../../../services/core-engine/src/events/grpc/EvtEventPartitionGrpcService";
import { EvtEventPartitionMetrics } from "../../../services/core-engine/src/events/metrics/EvtEventPartitionMetrics";

describe("EvtEventPartition End-to-End Enterprise Scenario", () => {
  const grpcService = new EvtEventPartitionGrpcService();

  test("dispatches and verifies EvtEventPartition gRPC call", (done) => {
    grpcService.getEvtEventPartition({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      EvtEventPartitionMetrics.recordOperation("READ");
      expect(EvtEventPartitionMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
