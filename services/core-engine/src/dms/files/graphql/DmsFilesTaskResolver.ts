export const DmsFilesTaskGqlTypeDefs = `
  type DmsFilesTask {
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
    getDmsFilesTask(id: ID!): DmsFilesTask
    listDmsFilesTasks(tenantId: String!, limit: Int): [DmsFilesTask!]!
  }

  extend type Mutation {
    createDmsFilesTask(tenantId: String!, code: String!, name: String!): DmsFilesTask!
    deleteDmsFilesTask(id: ID!): Boolean!
  }
`;

export const DmsFilesTaskGqlResolvers = {
  Query: {
    getDmsFilesTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFilesTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
