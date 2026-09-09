import { DocDocumentFileRpcServer } from "../../../services/core-engine/src/documents/rpc/servers/DocDocumentFileRpcServer";
import { DocDocumentFileFormValidator } from "../../../packages/types/src/forms/documents/DocDocumentFileFormSchema";

describe("DocDocumentFile System Level Integration Test", () => {
  const server = new DocDocumentFileRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = DocDocumentFileFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
