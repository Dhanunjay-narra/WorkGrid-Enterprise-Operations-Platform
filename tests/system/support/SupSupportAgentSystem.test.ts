import { SupSupportAgentRpcServer } from "../../../services/core-engine/src/support/rpc/servers/SupSupportAgentRpcServer";
import { SupSupportAgentFormValidator } from "../../../packages/types/src/forms/support/SupSupportAgentFormSchema";

describe("SupSupportAgent System Level Integration Test", () => {
  const server = new SupSupportAgentRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = SupSupportAgentFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
