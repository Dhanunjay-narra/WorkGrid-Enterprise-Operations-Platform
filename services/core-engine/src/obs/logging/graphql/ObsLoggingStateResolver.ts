export const ObsLoggingStateGqlTypeDefs = `
  type ObsLoggingState {
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
    getObsLoggingState(id: ID!): ObsLoggingState
    listObsLoggingStates(tenantId: String!, limit: Int): [ObsLoggingState!]!
  }

  extend type Mutation {
    createObsLoggingState(tenantId: String!, code: String!, name: String!): ObsLoggingState!
    deleteObsLoggingState(id: ID!): Boolean!
  }
`;

export const ObsLoggingStateGqlResolvers = {
  Query: {
    getObsLoggingState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
