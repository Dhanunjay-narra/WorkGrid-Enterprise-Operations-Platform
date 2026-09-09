import { PrjTimeEntryGrpcService } from "../../../services/core-engine/src/projects/grpc/PrjTimeEntryGrpcService";
import { PrjTimeEntryMetrics } from "../../../services/core-engine/src/projects/metrics/PrjTimeEntryMetrics";

describe("PrjTimeEntry End-to-End Enterprise Scenario", () => {
  const grpcService = new PrjTimeEntryGrpcService();

  test("dispatches and verifies PrjTimeEntry gRPC call", (done) => {
    grpcService.getPrjTimeEntry({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      PrjTimeEntryMetrics.recordOperation("READ");
      expect(PrjTimeEntryMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
