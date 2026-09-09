import { SecSecretMetadataRpcServer } from "../../../services/core-engine/src/security/rpc/servers/SecSecretMetadataRpcServer";
import { SecSecretMetadataFormValidator } from "../../../packages/types/src/forms/security/SecSecretMetadataFormSchema";

describe("SecSecretMetadata System Level Integration Test", () => {
  const server = new SecSecretMetadataRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = SecSecretMetadataFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
