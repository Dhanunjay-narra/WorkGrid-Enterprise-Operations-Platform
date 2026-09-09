import { InvStorageBinGrpcService } from "../../../services/core-engine/src/inventory/grpc/InvStorageBinGrpcService";
import { InvStorageBinMetrics } from "../../../services/core-engine/src/inventory/metrics/InvStorageBinMetrics";

describe("InvStorageBin End-to-End Enterprise Scenario", () => {
  const grpcService = new InvStorageBinGrpcService();

  test("dispatches and verifies InvStorageBin gRPC call", (done) => {
    grpcService.getInvStorageBin({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      InvStorageBinMetrics.recordOperation("READ");
      expect(InvStorageBinMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
