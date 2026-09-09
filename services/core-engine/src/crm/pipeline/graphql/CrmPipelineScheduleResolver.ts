export const CrmPipelineScheduleGqlTypeDefs = `
  type CrmPipelineSchedule {
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
    getCrmPipelineSchedule(id: ID!): CrmPipelineSchedule
    listCrmPipelineSchedules(tenantId: String!, limit: Int): [CrmPipelineSchedule!]!
  }

  extend type Mutation {
    createCrmPipelineSchedule(tenantId: String!, code: String!, name: String!): CrmPipelineSchedule!
    deleteCrmPipelineSchedule(id: ID!): Boolean!
  }
`;

export const CrmPipelineScheduleGqlResolvers = {
  Query: {
    getCrmPipelineSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelineSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
