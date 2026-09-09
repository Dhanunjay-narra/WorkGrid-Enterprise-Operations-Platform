import { IotCommandExecutionLogGrpcService } from "../../../services/core-engine/src/iot/grpc/IotCommandExecutionLogGrpcService";
import { IotCommandExecutionLogMetrics } from "../../../services/core-engine/src/iot/metrics/IotCommandExecutionLogMetrics";

describe("IotCommandExecutionLog End-to-End Enterprise Scenario", () => {
  const grpcService = new IotCommandExecutionLogGrpcService();

  test("dispatches and verifies IotCommandExecutionLog gRPC call", (done) => {
    grpcService.getIotCommandExecutionLog({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IotCommandExecutionLogMetrics.recordOperation("READ");
      expect(IotCommandExecutionLogMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
