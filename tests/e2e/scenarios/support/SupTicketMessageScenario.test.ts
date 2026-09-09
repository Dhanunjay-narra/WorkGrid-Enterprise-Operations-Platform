import { SupTicketMessageGrpcService } from "../../../services/core-engine/src/support/grpc/SupTicketMessageGrpcService";
import { SupTicketMessageMetrics } from "../../../services/core-engine/src/support/metrics/SupTicketMessageMetrics";

describe("SupTicketMessage End-to-End Enterprise Scenario", () => {
  const grpcService = new SupTicketMessageGrpcService();

  test("dispatches and verifies SupTicketMessage gRPC call", (done) => {
    grpcService.getSupTicketMessage({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      SupTicketMessageMetrics.recordOperation("READ");
      expect(SupTicketMessageMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
