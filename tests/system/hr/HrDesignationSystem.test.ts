import { HrDesignationRpcServer } from "../../../services/core-engine/src/hr/rpc/servers/HrDesignationRpcServer";
import { HrDesignationFormValidator } from "../../../packages/types/src/forms/hr/HrDesignationFormSchema";

describe("HrDesignation System Level Integration Test", () => {
  const server = new HrDesignationRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = HrDesignationFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
