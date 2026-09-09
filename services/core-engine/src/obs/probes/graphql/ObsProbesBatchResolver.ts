export const ObsProbesBatchGqlTypeDefs = `
  type ObsProbesBatch {
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
    getObsProbesBatch(id: ID!): ObsProbesBatch
    listObsProbesBatchs(tenantId: String!, limit: Int): [ObsProbesBatch!]!
  }

  extend type Mutation {
    createObsProbesBatch(tenantId: String!, code: String!, name: String!): ObsProbesBatch!
    deleteObsProbesBatch(id: ID!): Boolean!
  }
`;

export const ObsProbesBatchGqlResolvers = {
  Query: {
    getObsProbesBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
