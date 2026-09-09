export const BiCohortsScheduleGqlTypeDefs = `
  type BiCohortsSchedule {
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
    getBiCohortsSchedule(id: ID!): BiCohortsSchedule
    listBiCohortsSchedules(tenantId: String!, limit: Int): [BiCohortsSchedule!]!
  }

  extend type Mutation {
    createBiCohortsSchedule(tenantId: String!, code: String!, name: String!): BiCohortsSchedule!
    deleteBiCohortsSchedule(id: ID!): Boolean!
  }
`;

export const BiCohortsScheduleGqlResolvers = {
  Query: {
    getBiCohortsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiCohortsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
