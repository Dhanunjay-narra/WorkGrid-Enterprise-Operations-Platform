export const CrmAccountsPolicyGqlTypeDefs = `
  type CrmAccountsPolicy {
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
    getCrmAccountsPolicy(id: ID!): CrmAccountsPolicy
    listCrmAccountsPolicys(tenantId: String!, limit: Int): [CrmAccountsPolicy!]!
  }

  extend type Mutation {
    createCrmAccountsPolicy(tenantId: String!, code: String!, name: String!): CrmAccountsPolicy!
    deleteCrmAccountsPolicy(id: ID!): Boolean!
  }
`;

export const CrmAccountsPolicyGqlResolvers = {
  Query: {
    getCrmAccountsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmAccountsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
