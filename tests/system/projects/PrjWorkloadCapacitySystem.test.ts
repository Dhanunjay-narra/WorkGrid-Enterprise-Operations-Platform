import { PrjWorkloadCapacityRpcServer } from "../../../services/core-engine/src/projects/rpc/servers/PrjWorkloadCapacityRpcServer";
import { PrjWorkloadCapacityFormValidator } from "../../../packages/types/src/forms/projects/PrjWorkloadCapacityFormSchema";

describe("PrjWorkloadCapacity System Level Integration Test", () => {
  const server = new PrjWorkloadCapacityRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = PrjWorkloadCapacityFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
