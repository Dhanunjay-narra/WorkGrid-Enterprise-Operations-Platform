import { CrmMeetingRpcServer } from "../../../services/core-engine/src/crm/rpc/servers/CrmMeetingRpcServer";
import { CrmMeetingFormValidator } from "../../../packages/types/src/forms/crm/CrmMeetingFormSchema";

describe("CrmMeeting System Level Integration Test", () => {
  const server = new CrmMeetingRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = CrmMeetingFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
