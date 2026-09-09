export const CrmContactsScheduleGqlTypeDefs = `
  type CrmContactsSchedule {
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
    getCrmContactsSchedule(id: ID!): CrmContactsSchedule
    listCrmContactsSchedules(tenantId: String!, limit: Int): [CrmContactsSchedule!]!
  }

  extend type Mutation {
    createCrmContactsSchedule(tenantId: String!, code: String!, name: String!): CrmContactsSchedule!
    deleteCrmContactsSchedule(id: ID!): Boolean!
  }
`;

export const CrmContactsScheduleGqlResolvers = {
  Query: {
    getCrmContactsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmContactsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
