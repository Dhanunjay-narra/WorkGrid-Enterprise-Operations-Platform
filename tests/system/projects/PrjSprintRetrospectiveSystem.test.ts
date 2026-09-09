import { PrjSprintRetrospectiveRpcServer } from "../../../services/core-engine/src/projects/rpc/servers/PrjSprintRetrospectiveRpcServer";
import { PrjSprintRetrospectiveFormValidator } from "../../../packages/types/src/forms/projects/PrjSprintRetrospectiveFormSchema";

describe("PrjSprintRetrospective System Level Integration Test", () => {
  const server = new PrjSprintRetrospectiveRpcServer();

  test("dispatches RPC query successfully", async () => {
    const res = await server.handleRpcRequest("query", { id: "sys-01" });
    expect(res.success).toBe(true);
  });

  test("validates form schema", () => {
    const errs = PrjSprintRetrospectiveFormValidator.validateForm({ code: "C1", name: "N1" });
    expect(errs.length).toBe(0);
  });
});
