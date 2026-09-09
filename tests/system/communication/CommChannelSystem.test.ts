import { CommChannelRpcServer } from "../../../services/core-engine/src/communication/rpc/servers/CommChannelRpcServer";
import { CommChannelFormValidator } from "../../../packages/types/src/forms/communication/CommChannelFormSchema";

describe("CommChannel System Level Integration Test", () => {
  const server = new CommChannelRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = CommChannelFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
