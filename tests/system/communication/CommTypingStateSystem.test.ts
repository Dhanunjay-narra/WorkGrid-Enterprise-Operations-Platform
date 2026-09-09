import { CommTypingStateRpcServer } from "../../../services/core-engine/src/communication/rpc/servers/CommTypingStateRpcServer";
import { CommTypingStateFormValidator } from "../../../packages/types/src/forms/communication/CommTypingStateFormSchema";

describe("CommTypingState System Level Integration Test", () => {
  const server = new CommTypingStateRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = CommTypingStateFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
