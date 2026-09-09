import { CommMessageReactionRpcServer } from "../../../services/core-engine/src/communication/rpc/servers/CommMessageReactionRpcServer";
import { CommMessageReactionFormValidator } from "../../../packages/types/src/forms/communication/CommMessageReactionFormSchema";

describe("CommMessageReaction System Level Integration Test", () => {
  const server = new CommMessageReactionRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = CommMessageReactionFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
