export const BiQueriesScheduleGqlTypeDefs = `
  type BiQueriesSchedule {
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
    getBiQueriesSchedule(id: ID!): BiQueriesSchedule
    listBiQueriesSchedules(tenantId: String!, limit: Int): [BiQueriesSchedule!]!
  }

  extend type Mutation {
    createBiQueriesSchedule(tenantId: String!, code: String!, name: String!): BiQueriesSchedule!
    deleteBiQueriesSchedule(id: ID!): Boolean!
  }
`;

export const BiQueriesScheduleGqlResolvers = {
  Query: {
    getBiQueriesSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiQueriesSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
