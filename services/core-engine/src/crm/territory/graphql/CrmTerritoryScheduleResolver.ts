export const CrmTerritoryScheduleGqlTypeDefs = `
  type CrmTerritorySchedule {
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
    getCrmTerritorySchedule(id: ID!): CrmTerritorySchedule
    listCrmTerritorySchedules(tenantId: String!, limit: Int): [CrmTerritorySchedule!]!
  }

  extend type Mutation {
    createCrmTerritorySchedule(tenantId: String!, code: String!, name: String!): CrmTerritorySchedule!
    deleteCrmTerritorySchedule(id: ID!): Boolean!
  }
`;

export const CrmTerritoryScheduleGqlResolvers = {
  Query: {
    getCrmTerritorySchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmTerritorySchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
