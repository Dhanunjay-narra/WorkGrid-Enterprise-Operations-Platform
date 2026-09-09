import { WfWorkflowDefinitionClient } from "../../../packages/sdk/src/clients/workflow/WfWorkflowDefinitionClient";

describe("WfWorkflowDefinition SDK Client Integration Matrix", () => {
  const client = new WfWorkflowDefinitionClient("test-api-key");

  test("fetches single WfWorkflowDefinition via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("workflow");
  });

  test("lists WfWorkflowDefinition entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
