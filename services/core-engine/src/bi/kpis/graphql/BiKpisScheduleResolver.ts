export const BiKpisScheduleGqlTypeDefs = `
  type BiKpisSchedule {
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
    getBiKpisSchedule(id: ID!): BiKpisSchedule
    listBiKpisSchedules(tenantId: String!, limit: Int): [BiKpisSchedule!]!
  }

  extend type Mutation {
    createBiKpisSchedule(tenantId: String!, code: String!, name: String!): BiKpisSchedule!
    deleteBiKpisSchedule(id: ID!): Boolean!
  }
`;

export const BiKpisScheduleGqlResolvers = {
  Query: {
    getBiKpisSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
