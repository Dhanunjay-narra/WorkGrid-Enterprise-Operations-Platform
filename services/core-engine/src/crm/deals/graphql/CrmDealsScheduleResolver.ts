export const CrmDealsScheduleGqlTypeDefs = `
  type CrmDealsSchedule {
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
    getCrmDealsSchedule(id: ID!): CrmDealsSchedule
    listCrmDealsSchedules(tenantId: String!, limit: Int): [CrmDealsSchedule!]!
  }

  extend type Mutation {
    createCrmDealsSchedule(tenantId: String!, code: String!, name: String!): CrmDealsSchedule!
    deleteCrmDealsSchedule(id: ID!): Boolean!
  }
`;

export const CrmDealsScheduleGqlResolvers = {
  Query: {
    getCrmDealsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmDealsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
