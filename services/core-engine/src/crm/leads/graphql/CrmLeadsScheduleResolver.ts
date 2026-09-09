export const CrmLeadsScheduleGqlTypeDefs = `
  type CrmLeadsSchedule {
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
    getCrmLeadsSchedule(id: ID!): CrmLeadsSchedule
    listCrmLeadsSchedules(tenantId: String!, limit: Int): [CrmLeadsSchedule!]!
  }

  extend type Mutation {
    createCrmLeadsSchedule(tenantId: String!, code: String!, name: String!): CrmLeadsSchedule!
    deleteCrmLeadsSchedule(id: ID!): Boolean!
  }
`;

export const CrmLeadsScheduleGqlResolvers = {
  Query: {
    getCrmLeadsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmLeadsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
