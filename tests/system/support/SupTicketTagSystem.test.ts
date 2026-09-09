import { SupTicketTagRpcServer } from "../../../services/core-engine/src/support/rpc/servers/SupTicketTagRpcServer";
import { SupTicketTagFormValidator } from "../../../packages/types/src/forms/support/SupTicketTagFormSchema";

describe("SupTicketTag System Level Integration Test", () => {
  const server = new SupTicketTagRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = SupTicketTagFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
