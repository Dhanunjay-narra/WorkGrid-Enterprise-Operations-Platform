export const CrmAccountsThresholdGqlTypeDefs = `
  type CrmAccountsThreshold {
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
    getCrmAccountsThreshold(id: ID!): CrmAccountsThreshold
    listCrmAccountsThresholds(tenantId: String!, limit: Int): [CrmAccountsThreshold!]!
  }

  extend type Mutation {
    createCrmAccountsThreshold(tenantId: String!, code: String!, name: String!): CrmAccountsThreshold!
    deleteCrmAccountsThreshold(id: ID!): Boolean!
  }
`;

export const CrmAccountsThresholdGqlResolvers = {
  Query: {
    getCrmAccountsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmAccountsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
