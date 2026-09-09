export const ObsSpansStateGqlTypeDefs = `
  type ObsSpansState {
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
    getObsSpansState(id: ID!): ObsSpansState
    listObsSpansStates(tenantId: String!, limit: Int): [ObsSpansState!]!
  }

  extend type Mutation {
    createObsSpansState(tenantId: String!, code: String!, name: String!): ObsSpansState!
    deleteObsSpansState(id: ID!): Boolean!
  }
`;

export const ObsSpansStateGqlResolvers = {
  Query: {
    getObsSpansState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
