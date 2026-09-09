export const ObsProbesStateGqlTypeDefs = `
  type ObsProbesState {
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
    getObsProbesState(id: ID!): ObsProbesState
    listObsProbesStates(tenantId: String!, limit: Int): [ObsProbesState!]!
  }

  extend type Mutation {
    createObsProbesState(tenantId: String!, code: String!, name: String!): ObsProbesState!
    deleteObsProbesState(id: ID!): Boolean!
  }
`;

export const ObsProbesStateGqlResolvers = {
  Query: {
    getObsProbesState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
