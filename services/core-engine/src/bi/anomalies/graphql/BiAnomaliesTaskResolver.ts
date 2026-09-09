export const BiAnomaliesTaskGqlTypeDefs = `
  type BiAnomaliesTask {
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
    getBiAnomaliesTask(id: ID!): BiAnomaliesTask
    listBiAnomaliesTasks(tenantId: String!, limit: Int): [BiAnomaliesTask!]!
  }

  extend type Mutation {
    createBiAnomaliesTask(tenantId: String!, code: String!, name: String!): BiAnomaliesTask!
    deleteBiAnomaliesTask(id: ID!): Boolean!
  }
`;

export const BiAnomaliesTaskGqlResolvers = {
  Query: {
    getBiAnomaliesTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiAnomaliesTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
