import { IdGroupMembershipRpcServer } from "../../../services/core-engine/src/identity/rpc/servers/IdGroupMembershipRpcServer";
import { IdGroupMembershipFormValidator } from "../../../packages/types/src/forms/identity/IdGroupMembershipFormSchema";

describe("IdGroupMembership System Level Integration Test", () => {
  const server = new IdGroupMembershipRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IdGroupMembershipFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
