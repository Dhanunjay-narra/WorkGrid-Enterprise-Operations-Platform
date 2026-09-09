import { SupTicketTagGrpcService } from "../../../services/core-engine/src/support/grpc/SupTicketTagGrpcService";
import { SupTicketTagMetrics } from "../../../services/core-engine/src/support/metrics/SupTicketTagMetrics";

describe("SupTicketTag End-to-End Enterprise Scenario", () => {
  const grpcService = new SupTicketTagGrpcService();

  test("dispatches and verifies SupTicketTag gRPC call", (done) => {
    grpcService.getSupTicketTag({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SupTicketTagMetrics.recordOperation("READ");
      expect(SupTicketTagMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
