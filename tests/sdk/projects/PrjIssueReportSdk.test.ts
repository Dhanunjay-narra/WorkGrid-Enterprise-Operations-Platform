import { PrjIssueReportClient } from "../../../packages/sdk/src/clients/projects/PrjIssueReportClient";

describe("PrjIssueReport SDK Client Integration Matrix", () => {
  const client = new PrjIssueReportClient("test-api-key");

  test("fetches single PrjIssueReport via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("projects");
  });

  test("lists PrjIssueReport entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
