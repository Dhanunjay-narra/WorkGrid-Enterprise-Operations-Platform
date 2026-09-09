import { EvtAckReceiptRpcServer } from "../../../services/core-engine/src/events/rpc/servers/EvtAckReceiptRpcServer";
import { EvtAckReceiptFormValidator } from "../../../packages/types/src/forms/events/EvtAckReceiptFormSchema";

describe("EvtAckReceipt System Level Integration Test", () => {
  const server = new EvtAckReceiptRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = EvtAckReceiptFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
