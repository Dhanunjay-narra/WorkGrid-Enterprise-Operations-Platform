import { CommDigestQueueRpcServer } from "../../../services/core-engine/src/communication/rpc/servers/CommDigestQueueRpcServer";
import { CommDigestQueueFormValidator } from "../../../packages/types/src/forms/communication/CommDigestQueueFormSchema";

describe("CommDigestQueue System Level Integration Test", () => {
  const server = new CommDigestQueueRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = CommDigestQueueFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
