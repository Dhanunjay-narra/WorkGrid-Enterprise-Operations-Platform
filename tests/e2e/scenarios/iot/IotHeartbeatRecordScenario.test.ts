import { IotHeartbeatRecordGrpcService } from "../../../services/core-engine/src/iot/grpc/IotHeartbeatRecordGrpcService";
import { IotHeartbeatRecordMetrics } from "../../../services/core-engine/src/iot/metrics/IotHeartbeatRecordMetrics";

describe("IotHeartbeatRecord End-to-End Enterprise Scenario", () => {
  const grpcService = new IotHeartbeatRecordGrpcService();

  test("dispatches and verifies IotHeartbeatRecord gRPC call", (done) => {
    grpcService.getIotHeartbeatRecord({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IotHeartbeatRecordMetrics.recordOperation("READ");
      expect(IotHeartbeatRecordMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
