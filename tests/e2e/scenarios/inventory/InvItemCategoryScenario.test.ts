import { InvItemCategoryGrpcService } from "../../../services/core-engine/src/inventory/grpc/InvItemCategoryGrpcService";
import { InvItemCategoryMetrics } from "../../../services/core-engine/src/inventory/metrics/InvItemCategoryMetrics";

describe("InvItemCategory End-to-End Enterprise Scenario", () => {
  const grpcService = new InvItemCategoryGrpcService();

  test("dispatches and verifies InvItemCategory gRPC call", (done) => {
    grpcService.getInvItemCategory({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      InvItemCategoryMetrics.recordOperation("READ");
      expect(InvItemCategoryMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
