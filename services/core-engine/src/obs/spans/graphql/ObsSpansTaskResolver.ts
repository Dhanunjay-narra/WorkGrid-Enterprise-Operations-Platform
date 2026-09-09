export const ObsSpansTaskGqlTypeDefs = `
  type ObsSpansTask {
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
    getObsSpansTask(id: ID!): ObsSpansTask
    listObsSpansTasks(tenantId: String!, limit: Int): [ObsSpansTask!]!
  }

  extend type Mutation {
    createObsSpansTask(tenantId: String!, code: String!, name: String!): ObsSpansTask!
    deleteObsSpansTask(id: ID!): Boolean!
  }
`;

export const ObsSpansTaskGqlResolvers = {
  Query: {
    getObsSpansTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
