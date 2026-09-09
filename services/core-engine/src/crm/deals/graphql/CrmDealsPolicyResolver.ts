export const CrmDealsPolicyGqlTypeDefs = `
  type CrmDealsPolicy {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    version: Int!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getCrmDealsPolicy(id: ID!): CrmDealsPolicy
    listCrmDealsPolicys(tenantId: String!, limit: Int): [CrmDealsPolicy!]!
  }

  extend type Mutation {
    createCrmDealsPolicy(tenantId: String!, code: String!, name: String!): CrmDealsPolicy!
    deleteCrmDealsPolicy(id: ID!): Boolean!
  }
`;

export const CrmDealsPolicyGqlResolvers = {
  Query: {
    getCrmDealsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmDealsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
