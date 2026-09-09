export const SupCustomerSurveyTypeDefs = `
  type SupCustomerSurvey {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getSupCustomerSurvey(id: ID!): SupCustomerSurvey
    listSupCustomerSurveys(tenantId: String!): [SupCustomerSurvey!]!
  }
`;

export const SupCustomerSurveyResolvers = {
  Query: {
    getSupCustomerSurvey: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "SupCustomerSurvey", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listSupCustomerSurveys: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "SupCustomerSurvey", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
