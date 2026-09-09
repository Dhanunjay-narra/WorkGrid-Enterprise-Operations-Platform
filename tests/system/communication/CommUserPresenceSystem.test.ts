import { CommUserPresenceRpcServer } from "../../../services/core-engine/src/communication/rpc/servers/CommUserPresenceRpcServer";
import { CommUserPresenceFormValidator } from "../../../packages/types/src/forms/communication/CommUserPresenceFormSchema";

describe("CommUserPresence System Level Integration Test", () => {
  const server = new CommUserPresenceRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = CommUserPresenceFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
