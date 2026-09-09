export const ObsTracingStateGqlTypeDefs = `
  type ObsTracingState {
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
    getObsTracingState(id: ID!): ObsTracingState
    listObsTracingStates(tenantId: String!, limit: Int): [ObsTracingState!]!
  }

  extend type Mutation {
    createObsTracingState(tenantId: String!, code: String!, name: String!): ObsTracingState!
    deleteObsTracingState(id: ID!): Boolean!
  }
`;

export const ObsTracingStateGqlResolvers = {
  Query: {
    getObsTracingState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsTracingState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
