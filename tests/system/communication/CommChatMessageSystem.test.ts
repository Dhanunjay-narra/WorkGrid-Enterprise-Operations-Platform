import { CommChatMessageRpcServer } from "../../../services/core-engine/src/communication/rpc/servers/CommChatMessageRpcServer";
import { CommChatMessageFormValidator } from "../../../packages/types/src/forms/communication/CommChatMessageFormSchema";

describe("CommChatMessage System Level Integration Test", () => {
  const server = new CommChatMessageRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = CommChatMessageFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
