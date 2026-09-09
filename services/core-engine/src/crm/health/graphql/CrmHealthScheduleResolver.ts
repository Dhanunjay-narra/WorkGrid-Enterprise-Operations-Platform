export const CrmHealthScheduleGqlTypeDefs = `
  type CrmHealthSchedule {
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
    getCrmHealthSchedule(id: ID!): CrmHealthSchedule
    listCrmHealthSchedules(tenantId: String!, limit: Int): [CrmHealthSchedule!]!
  }

  extend type Mutation {
    createCrmHealthSchedule(tenantId: String!, code: String!, name: String!): CrmHealthSchedule!
    deleteCrmHealthSchedule(id: ID!): Boolean!
  }
`;

export const CrmHealthScheduleGqlResolvers = {
  Query: {
    getCrmHealthSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmHealthSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
