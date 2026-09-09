import { IntFieldMappingSchemaRpcServer } from "../../../services/core-engine/src/integrations/rpc/servers/IntFieldMappingSchemaRpcServer";
import { IntFieldMappingSchemaFormValidator } from "../../../packages/types/src/forms/integrations/IntFieldMappingSchemaFormSchema";

describe("IntFieldMappingSchema System Level Integration Test", () => {
  const server = new IntFieldMappingSchemaRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = IntFieldMappingSchemaFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
