export const ObsMetricsStateGqlTypeDefs = `
  type ObsMetricsState {
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
    getObsMetricsState(id: ID!): ObsMetricsState
    listObsMetricsStates(tenantId: String!, limit: Int): [ObsMetricsState!]!
  }

  extend type Mutation {
    createObsMetricsState(tenantId: String!, code: String!, name: String!): ObsMetricsState!
    deleteObsMetricsState(id: ID!): Boolean!
  }
`;

export const ObsMetricsStateGqlResolvers = {
  Query: {
    getObsMetricsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsMetricsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
