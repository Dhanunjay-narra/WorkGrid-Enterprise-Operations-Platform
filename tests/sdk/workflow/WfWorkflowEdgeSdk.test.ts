import { WfWorkflowEdgeClient } from "../../../packages/sdk/src/clients/workflow/WfWorkflowEdgeClient";

describe("WfWorkflowEdge SDK Client Integration Matrix", () => {
  const client = new WfWorkflowEdgeClient("test-api-key");

  test("fetches single WfWorkflowEdge via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("workflow");
  });

  test("lists WfWorkflowEdge entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
