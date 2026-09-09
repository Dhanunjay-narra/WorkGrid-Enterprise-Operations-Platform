export const BiWidgetsScheduleGqlTypeDefs = `
  type BiWidgetsSchedule {
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
    getBiWidgetsSchedule(id: ID!): BiWidgetsSchedule
    listBiWidgetsSchedules(tenantId: String!, limit: Int): [BiWidgetsSchedule!]!
  }

  extend type Mutation {
    createBiWidgetsSchedule(tenantId: String!, code: String!, name: String!): BiWidgetsSchedule!
    deleteBiWidgetsSchedule(id: ID!): Boolean!
  }
`;

export const BiWidgetsScheduleGqlResolvers = {
  Query: {
    getBiWidgetsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
