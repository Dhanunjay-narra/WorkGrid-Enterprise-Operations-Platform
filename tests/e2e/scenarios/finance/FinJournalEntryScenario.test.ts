import { FinJournalEntryGrpcService } from "../../../services/core-engine/src/finance/grpc/FinJournalEntryGrpcService";
import { FinJournalEntryMetrics } from "../../../services/core-engine/src/finance/metrics/FinJournalEntryMetrics";

describe("FinJournalEntry End-to-End Enterprise Scenario", () => {
  const grpcService = new FinJournalEntryGrpcService();

  test("dispatches and verifies FinJournalEntry gRPC call", (done) => {
    grpcService.getFinJournalEntry({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      FinJournalEntryMetrics.recordOperation("READ");
      expect(FinJournalEntryMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
