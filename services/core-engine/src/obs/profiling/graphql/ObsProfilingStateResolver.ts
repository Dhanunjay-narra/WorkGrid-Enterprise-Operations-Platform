export const ObsProfilingStateGqlTypeDefs = `
  type ObsProfilingState {
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
    getObsProfilingState(id: ID!): ObsProfilingState
    listObsProfilingStates(tenantId: String!, limit: Int): [ObsProfilingState!]!
  }

  extend type Mutation {
    createObsProfilingState(tenantId: String!, code: String!, name: String!): ObsProfilingState!
    deleteObsProfilingState(id: ID!): Boolean!
  }
`;

export const ObsProfilingStateGqlResolvers = {
  Query: {
    getObsProfilingState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProfilingState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
