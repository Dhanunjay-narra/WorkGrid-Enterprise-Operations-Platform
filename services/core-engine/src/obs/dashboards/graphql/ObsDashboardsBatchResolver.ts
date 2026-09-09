export const ObsDashboardsBatchGqlTypeDefs = `
  type ObsDashboardsBatch {
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
    getObsDashboardsBatch(id: ID!): ObsDashboardsBatch
    listObsDashboardsBatchs(tenantId: String!, limit: Int): [ObsDashboardsBatch!]!
  }

  extend type Mutation {
    createObsDashboardsBatch(tenantId: String!, code: String!, name: String!): ObsDashboardsBatch!
    deleteObsDashboardsBatch(id: ID!): Boolean!
  }
`;

export const ObsDashboardsBatchGqlResolvers = {
  Query: {
    getObsDashboardsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsDashboardsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
