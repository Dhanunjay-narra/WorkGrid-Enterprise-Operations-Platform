import { IntAuthTokenPairRpcServer } from "../../../services/core-engine/src/integrations/rpc/servers/IntAuthTokenPairRpcServer";
import { IntAuthTokenPairFormValidator } from "../../../packages/types/src/forms/integrations/IntAuthTokenPairFormSchema";

describe("IntAuthTokenPair System Level Integration Test", () => {
  const server = new IntAuthTokenPairRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IntAuthTokenPairFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
