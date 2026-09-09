import { CommBroadcastAnnouncementRpcServer } from "../../../services/core-engine/src/communication/rpc/servers/CommBroadcastAnnouncementRpcServer";
import { CommBroadcastAnnouncementFormValidator } from "../../../packages/types/src/forms/communication/CommBroadcastAnnouncementFormSchema";

describe("CommBroadcastAnnouncement System Level Integration Test", () => {
  const server = new CommBroadcastAnnouncementRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = CommBroadcastAnnouncementFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
