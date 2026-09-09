import { CommDirectMessageRpcServer } from "../../../services/core-engine/src/communication/rpc/servers/CommDirectMessageRpcServer";
import { CommDirectMessageFormValidator } from "../../../packages/types/src/forms/communication/CommDirectMessageFormSchema";

describe("CommDirectMessage System Level Integration Test", () => {
  const server = new CommDirectMessageRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = CommDirectMessageFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
