import { WfCronScheduleRpcServer } from "../../../services/core-engine/src/workflow/rpc/servers/WfCronScheduleRpcServer";
import { WfCronScheduleFormValidator } from "../../../packages/types/src/forms/workflow/WfCronScheduleFormSchema";

describe("WfCronSchedule System Level Integration Test", () => {
  const server = new WfCronScheduleRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = WfCronScheduleFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
