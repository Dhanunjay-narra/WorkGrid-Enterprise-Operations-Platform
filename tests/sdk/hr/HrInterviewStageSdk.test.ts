import { HrInterviewStageClient } from "../../../packages/sdk/src/clients/hr/HrInterviewStageClient";

describe("HrInterviewStage SDK Client Integration Matrix", () => {
  const client = new HrInterviewStageClient("test-api-key");

  test("fetches single HrInterviewStage via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("hr");
  });

  test("lists HrInterviewStage entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
