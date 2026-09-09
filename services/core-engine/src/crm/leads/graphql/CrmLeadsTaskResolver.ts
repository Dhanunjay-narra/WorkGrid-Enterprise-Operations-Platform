export const CrmLeadsTaskGqlTypeDefs = `
  type CrmLeadsTask {
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
    getCrmLeadsTask(id: ID!): CrmLeadsTask
    listCrmLeadsTasks(tenantId: String!, limit: Int): [CrmLeadsTask!]!
  }

  extend type Mutation {
    createCrmLeadsTask(tenantId: String!, code: String!, name: String!): CrmLeadsTask!
    deleteCrmLeadsTask(id: ID!): Boolean!
  }
`;

export const CrmLeadsTaskGqlResolvers = {
  Query: {
    getCrmLeadsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmLeadsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
