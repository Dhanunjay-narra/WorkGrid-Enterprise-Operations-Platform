export const IntMappingsScheduleGqlTypeDefs = `
  type IntMappingsSchedule {
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
    getIntMappingsSchedule(id: ID!): IntMappingsSchedule
    listIntMappingsSchedules(tenantId: String!, limit: Int): [IntMappingsSchedule!]!
  }

  extend type Mutation {
    createIntMappingsSchedule(tenantId: String!, code: String!, name: String!): IntMappingsSchedule!
    deleteIntMappingsSchedule(id: ID!): Boolean!
  }
`;

export const IntMappingsScheduleGqlResolvers = {
  Query: {
    getIntMappingsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntMappingsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
