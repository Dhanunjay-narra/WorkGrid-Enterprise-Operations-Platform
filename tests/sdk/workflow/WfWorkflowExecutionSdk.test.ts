import { WfWorkflowExecutionClient } from "../../../packages/sdk/src/clients/workflow/WfWorkflowExecutionClient";

describe("WfWorkflowExecution SDK Client Integration Matrix", () => {
  const client = new WfWorkflowExecutionClient("test-api-key");

  test("fetches single WfWorkflowExecution via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("workflow");
  });

  test("lists WfWorkflowExecution entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
