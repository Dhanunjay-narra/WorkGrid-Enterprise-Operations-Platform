export const ObsProbesTaskGqlTypeDefs = `
  type ObsProbesTask {
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
    getObsProbesTask(id: ID!): ObsProbesTask
    listObsProbesTasks(tenantId: String!, limit: Int): [ObsProbesTask!]!
  }

  extend type Mutation {
    createObsProbesTask(tenantId: String!, code: String!, name: String!): ObsProbesTask!
    deleteObsProbesTask(id: ID!): Boolean!
  }
`;

export const ObsProbesTaskGqlResolvers = {
  Query: {
    getObsProbesTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
