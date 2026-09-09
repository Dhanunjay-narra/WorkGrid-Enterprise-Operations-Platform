export const BiForecastsAssignmentGqlTypeDefs = `
  type BiForecastsAssignment {
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
    getBiForecastsAssignment(id: ID!): BiForecastsAssignment
    listBiForecastsAssignments(tenantId: String!, limit: Int): [BiForecastsAssignment!]!
  }

  extend type Mutation {
    createBiForecastsAssignment(tenantId: String!, code: String!, name: String!): BiForecastsAssignment!
    deleteBiForecastsAssignment(id: ID!): Boolean!
  }
`;

export const BiForecastsAssignmentGqlResolvers = {
  Query: {
    getBiForecastsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiForecastsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
