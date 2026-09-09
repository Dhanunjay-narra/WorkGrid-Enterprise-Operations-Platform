import { SupCustomerSurveyClient } from "../../../packages/sdk/src/clients/support/SupCustomerSurveyClient";

describe("SupCustomerSurvey SDK Client Integration Matrix", () => {
  const client = new SupCustomerSurveyClient("test-api-key");

  test("fetches single SupCustomerSurvey via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("support");
  });

  test("lists SupCustomerSurvey entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
