import { DocDocumentVersionRpcServer } from "../../../services/core-engine/src/documents/rpc/servers/DocDocumentVersionRpcServer";
import { DocDocumentVersionFormValidator } from "../../../packages/types/src/forms/documents/DocDocumentVersionFormSchema";

describe("DocDocumentVersion System Level Integration Test", () => {
  const server = new DocDocumentVersionRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = DocDocumentVersionFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
