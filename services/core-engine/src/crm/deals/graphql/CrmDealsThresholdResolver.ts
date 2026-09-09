export const CrmDealsThresholdGqlTypeDefs = `
  type CrmDealsThreshold {
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
    getCrmDealsThreshold(id: ID!): CrmDealsThreshold
    listCrmDealsThresholds(tenantId: String!, limit: Int): [CrmDealsThreshold!]!
  }

  extend type Mutation {
    createCrmDealsThreshold(tenantId: String!, code: String!, name: String!): CrmDealsThreshold!
    deleteCrmDealsThreshold(id: ID!): Boolean!
  }
`;

export const CrmDealsThresholdGqlResolvers = {
  Query: {
    getCrmDealsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmDealsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
