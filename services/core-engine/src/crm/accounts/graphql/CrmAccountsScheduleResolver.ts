export const CrmAccountsScheduleGqlTypeDefs = `
  type CrmAccountsSchedule {
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
    getCrmAccountsSchedule(id: ID!): CrmAccountsSchedule
    listCrmAccountsSchedules(tenantId: String!, limit: Int): [CrmAccountsSchedule!]!
  }

  extend type Mutation {
    createCrmAccountsSchedule(tenantId: String!, code: String!, name: String!): CrmAccountsSchedule!
    deleteCrmAccountsSchedule(id: ID!): Boolean!
  }
`;

export const CrmAccountsScheduleGqlResolvers = {
  Query: {
    getCrmAccountsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmAccountsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
