export const CrmTerritoryTaskGqlTypeDefs = `
  type CrmTerritoryTask {
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
    getCrmTerritoryTask(id: ID!): CrmTerritoryTask
    listCrmTerritoryTasks(tenantId: String!, limit: Int): [CrmTerritoryTask!]!
  }

  extend type Mutation {
    createCrmTerritoryTask(tenantId: String!, code: String!, name: String!): CrmTerritoryTask!
    deleteCrmTerritoryTask(id: ID!): Boolean!
  }
`;

export const CrmTerritoryTaskGqlResolvers = {
  Query: {
    getCrmTerritoryTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmTerritoryTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
