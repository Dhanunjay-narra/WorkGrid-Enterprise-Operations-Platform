import { CommThreadReplyRpcServer } from "../../../services/core-engine/src/communication/rpc/servers/CommThreadReplyRpcServer";
import { CommThreadReplyFormValidator } from "../../../packages/types/src/forms/communication/CommThreadReplyFormSchema";

describe("CommThreadReply System Level Integration Test", () => {
  const server = new CommThreadReplyRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = CommThreadReplyFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
