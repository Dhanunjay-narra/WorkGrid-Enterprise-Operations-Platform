export const CrmLeadsThresholdGqlTypeDefs = `
  type CrmLeadsThreshold {
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
    getCrmLeadsThreshold(id: ID!): CrmLeadsThreshold
    listCrmLeadsThresholds(tenantId: String!, limit: Int): [CrmLeadsThreshold!]!
  }

  extend type Mutation {
    createCrmLeadsThreshold(tenantId: String!, code: String!, name: String!): CrmLeadsThreshold!
    deleteCrmLeadsThreshold(id: ID!): Boolean!
  }
`;

export const CrmLeadsThresholdGqlResolvers = {
  Query: {
    getCrmLeadsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmLeadsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
