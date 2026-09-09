import { WfDeadLetterQueueRpcServer } from "../../../services/core-engine/src/workflow/rpc/servers/WfDeadLetterQueueRpcServer";
import { WfDeadLetterQueueFormValidator } from "../../../packages/types/src/forms/workflow/WfDeadLetterQueueFormSchema";

describe("WfDeadLetterQueue System Level Integration Test", () => {
  const server = new WfDeadLetterQueueRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = WfDeadLetterQueueFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
