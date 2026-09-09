import { DocDocumentPermissionRpcServer } from "../../../services/core-engine/src/documents/rpc/servers/DocDocumentPermissionRpcServer";
import { DocDocumentPermissionFormValidator } from "../../../packages/types/src/forms/documents/DocDocumentPermissionFormSchema";

describe("DocDocumentPermission System Level Integration Test", () => {
  const server = new DocDocumentPermissionRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = DocDocumentPermissionFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
