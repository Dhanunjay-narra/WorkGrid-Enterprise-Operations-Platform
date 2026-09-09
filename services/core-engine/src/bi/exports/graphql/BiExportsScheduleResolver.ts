export const BiExportsScheduleGqlTypeDefs = `
  type BiExportsSchedule {
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
    getBiExportsSchedule(id: ID!): BiExportsSchedule
    listBiExportsSchedules(tenantId: String!, limit: Int): [BiExportsSchedule!]!
  }

  extend type Mutation {
    createBiExportsSchedule(tenantId: String!, code: String!, name: String!): BiExportsSchedule!
    deleteBiExportsSchedule(id: ID!): Boolean!
  }
`;

export const BiExportsScheduleGqlResolvers = {
  Query: {
    getBiExportsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiExportsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
