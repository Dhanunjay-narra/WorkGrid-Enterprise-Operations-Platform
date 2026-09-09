import { PrjRiskItemClient } from "../../../packages/sdk/src/clients/projects/PrjRiskItemClient";

describe("PrjRiskItem SDK Client Integration Matrix", () => {
  const client = new PrjRiskItemClient("test-api-key");

  test("fetches single PrjRiskItem via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("projects");
  });

  test("lists PrjRiskItem entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
