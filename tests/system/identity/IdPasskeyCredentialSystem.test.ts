import { IdPasskeyCredentialRpcServer } from "../../../services/core-engine/src/identity/rpc/servers/IdPasskeyCredentialRpcServer";
import { IdPasskeyCredentialFormValidator } from "../../../packages/types/src/forms/identity/IdPasskeyCredentialFormSchema";

describe("IdPasskeyCredential System Level Integration Test", () => {
  const server = new IdPasskeyCredentialRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IdPasskeyCredentialFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
