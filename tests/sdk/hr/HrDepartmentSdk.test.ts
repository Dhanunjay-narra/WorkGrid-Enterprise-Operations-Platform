import { HrDepartmentClient } from "../../../packages/sdk/src/clients/hr/HrDepartmentClient";

describe("HrDepartment SDK Client Integration Matrix", () => {
  const client = new HrDepartmentClient("test-api-key");

  test("fetches single HrDepartment via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("hr");
  });

  test("lists HrDepartment entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
