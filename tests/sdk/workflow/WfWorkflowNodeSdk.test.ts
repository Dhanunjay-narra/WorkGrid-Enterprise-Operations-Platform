import { WfWorkflowNodeClient } from "../../../packages/sdk/src/clients/workflow/WfWorkflowNodeClient";

describe("WfWorkflowNode SDK Client Integration Matrix", () => {
  const client = new WfWorkflowNodeClient("test-api-key");

  test("fetches single WfWorkflowNode via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("workflow");
  });

  test("lists WfWorkflowNode entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
