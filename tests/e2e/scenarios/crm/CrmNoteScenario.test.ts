import { CrmNoteGrpcService } from "../../../services/core-engine/src/crm/grpc/CrmNoteGrpcService";
import { CrmNoteMetrics } from "../../../services/core-engine/src/crm/metrics/CrmNoteMetrics";

describe("CrmNote End-to-End Enterprise Scenario", () => {
  const grpcService = new CrmNoteGrpcService();

  test("dispatches and verifies CrmNote gRPC call", (done) => {
    grpcService.getCrmNote({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      CrmNoteMetrics.recordOperation("READ");
      expect(CrmNoteMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
