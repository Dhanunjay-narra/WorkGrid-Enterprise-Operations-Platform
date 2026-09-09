import { DocAccessLogRpcServer } from "../../../services/core-engine/src/documents/rpc/servers/DocAccessLogRpcServer";
import { DocAccessLogFormValidator } from "../../../packages/types/src/forms/documents/DocAccessLogFormSchema";

describe("DocAccessLog System Level Integration Test", () => {
  const server = new DocAccessLogRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = DocAccessLogFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
