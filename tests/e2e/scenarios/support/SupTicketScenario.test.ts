import { SupTicketGrpcService } from "../../../services/core-engine/src/support/grpc/SupTicketGrpcService";
import { SupTicketMetrics } from "../../../services/core-engine/src/support/metrics/SupTicketMetrics";

describe("SupTicket End-to-End Enterprise Scenario", () => {
  const grpcService = new SupTicketGrpcService();

  test("dispatches and verifies SupTicket gRPC call", (done) => {
    grpcService.getSupTicket({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SupTicketMetrics.recordOperation("READ");
      expect(SupTicketMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
