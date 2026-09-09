import { BiCohortGroupRpcServer } from "../../../services/core-engine/src/analytics/rpc/servers/BiCohortGroupRpcServer";
import { BiCohortGroupFormValidator } from "../../../packages/types/src/forms/analytics/BiCohortGroupFormSchema";

describe("BiCohortGroup System Level Integration Test", () => {
  const server = new BiCohortGroupRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = BiCohortGroupFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
