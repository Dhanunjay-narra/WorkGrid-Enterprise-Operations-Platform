import { HrAttendanceRecordGrpcService } from "../../../services/core-engine/src/hr/grpc/HrAttendanceRecordGrpcService";
import { HrAttendanceRecordMetrics } from "../../../services/core-engine/src/hr/metrics/HrAttendanceRecordMetrics";

describe("HrAttendanceRecord End-to-End Enterprise Scenario", () => {
  const grpcService = new HrAttendanceRecordGrpcService();

  test("dispatches and verifies HrAttendanceRecord gRPC call", (done) => {
    grpcService.getHrAttendanceRecord({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      HrAttendanceRecordMetrics.recordOperation("READ");
      expect(HrAttendanceRecordMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
