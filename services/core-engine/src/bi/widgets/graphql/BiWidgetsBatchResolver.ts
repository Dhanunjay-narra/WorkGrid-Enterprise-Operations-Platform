export const BiWidgetsBatchGqlTypeDefs = `
  type BiWidgetsBatch {
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
    getBiWidgetsBatch(id: ID!): BiWidgetsBatch
    listBiWidgetsBatchs(tenantId: String!, limit: Int): [BiWidgetsBatch!]!
  }

  extend type Mutation {
    createBiWidgetsBatch(tenantId: String!, code: String!, name: String!): BiWidgetsBatch!
    deleteBiWidgetsBatch(id: ID!): Boolean!
  }
`;

export const BiWidgetsBatchGqlResolvers = {
  Query: {
    getBiWidgetsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
