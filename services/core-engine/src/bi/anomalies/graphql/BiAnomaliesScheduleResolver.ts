export const BiAnomaliesScheduleGqlTypeDefs = `
  type BiAnomaliesSchedule {
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
    getBiAnomaliesSchedule(id: ID!): BiAnomaliesSchedule
    listBiAnomaliesSchedules(tenantId: String!, limit: Int): [BiAnomaliesSchedule!]!
  }

  extend type Mutation {
    createBiAnomaliesSchedule(tenantId: String!, code: String!, name: String!): BiAnomaliesSchedule!
    deleteBiAnomaliesSchedule(id: ID!): Boolean!
  }
`;

export const BiAnomaliesScheduleGqlResolvers = {
  Query: {
    getBiAnomaliesSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiAnomaliesSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
