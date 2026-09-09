import { InvSupplierGrpcService } from "../../../services/core-engine/src/inventory/grpc/InvSupplierGrpcService";
import { InvSupplierMetrics } from "../../../services/core-engine/src/inventory/metrics/InvSupplierMetrics";

describe("InvSupplier End-to-End Enterprise Scenario", () => {
  const grpcService = new InvSupplierGrpcService();

  test("dispatches and verifies InvSupplier gRPC call", (done) => {
    grpcService.getInvSupplier({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      InvSupplierMetrics.recordOperation("READ");
      expect(InvSupplierMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
